/**
 * Serviço de integração com n8n
 * Envia dados de leads para o webhook do n8n
 */

// URL do webhook - pode ser configurada via variável de ambiente
const N8N_WEBHOOK_URL = 
  process.env.N8N_WEBHOOK_URL || 
  'https://n8n-n8n.kltkek.easypanel.host/webhook-test/4bb98269-a74c-4ebb-9725-155b2f8f0c03/lead';

export interface LeadData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  submittedAt?: string;
}

export interface N8nResponse {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Envia os dados do lead para o webhook do n8n com retry automático
 * @param leadData - Dados do formulário de contato
 * @param retries - Número de tentativas (padrão: 3)
 * @returns Promise com a resposta do webhook
 */
export async function sendLeadToN8n(
  leadData: LeadData,
  retries: number = 3
): Promise<N8nResponse> {
  // Adiciona timestamp se não existir
  const dataToSend = {
    ...leadData,
    submittedAt: leadData.submittedAt || new Date().toISOString(),
    source: 'landing-page',
  };

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`📤 Enviando lead para n8n (tentativa ${attempt}/${retries}):`, dataToSend);

      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status} - ${response.statusText}`);
      }

      // Tenta fazer parse do JSON, mas aceita resposta vazia
      let result;
      try {
        result = await response.json();
      } catch {
        result = { received: true };
      }
      
      console.log('✅ Lead enviado com sucesso:', result);

      return {
        success: true,
        message: 'Lead enviado com sucesso',
      };
    } catch (error) {
      console.error(`❌ Erro na tentativa ${attempt}/${retries}:`, error);
      
      // Se não for a última tentativa, aguarda antes de tentar novamente
      if (attempt < retries) {
        const waitTime = attempt * 1000; // Espera progressiva: 1s, 2s, 3s...
        console.log(`⏳ Aguardando ${waitTime}ms antes da próxima tentativa...`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
      } else {
        // Última tentativa falhou
        return {
          success: false,
          error: error instanceof Error ? error.message : 'Erro desconhecido',
        };
      }
    }
  }

  // Fallback (nunca deve chegar aqui)
  return {
    success: false,
    error: 'Número máximo de tentativas excedido',
  };
}

