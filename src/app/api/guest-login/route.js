import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, phone } = await request.json();

    if (!name || !phone) {
      return NextResponse.json({ message: 'Имя и телефон обязательны.' }, { status: 400 });
    }
    const userId = `guest_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;

    return NextResponse.json({ userId, name, phone }, { status: 200 });

  } catch (error) {
    console.error('Ошибка в API роуте guest-login:', error);
    return NextResponse.json({ message: 'Внутренняя ошибка сервера.' }, { status: 500 });
  }
}