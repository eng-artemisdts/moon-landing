import { NextRequest, NextResponse } from 'next/server';
import { sendLeadToN8n, type LeadData } from '@/lib/n8n-service';

/**
 * API Route para processar envio de formulário de contato
 * POST /api/contact
 */
export async function POST(request: NextRequest) {
  try {
    // Parse do body da requisição
    const body = await request.json();

    // Validação básica dos campos obrigatórios
    const requiredFields = ['fullName', 'email', 'phone', 'service', 'message'];
    const missingFields = requiredFields.filter(field => !body[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: `Campos obrigatórios faltando: ${missingFields.join(', ')}`,
        },
        { status: 400 }
      );
    }

    // Validação de email
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Email inválido',
        },
        { status: 400 }
      );
    }

    // Prepara os dados do lead
    const leadData: LeadData = {
      fullName: body.fullName,
      email: body.email,
      phone: body.phone,
      service: body.service,
      budget: body.budget || 'Não informado',
      message: body.message,
      submittedAt: new Date().toISOString(),
    };

    // Envia para o n8n
    const result = await sendLeadToN8n(leadData);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: result.error || 'Erro ao enviar dados',
        },
        { status: 500 }
      );
    }

    // Retorna sucesso
    return NextResponse.json({
      success: true,
      message: 'Formulário enviado com sucesso!',
    });

  } catch (error) {
    console.error('❌ Erro na API de contato:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Erro interno do servidor',
      },
      { status: 500 }
    );
  }
}

/**
 * Método OPTIONS para CORS (se necessário)
 */
export async function OPTIONS(request: NextRequest) {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  );
}

