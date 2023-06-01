import { NextResponse } from 'next/server';

import data from '@/data/data.json';
import { Technology } from '@/data/types';

export async function GET(req: Request) {
  const pageData = data.technology as Technology[];

  if (pageData === undefined) {
    return NextResponse.json(
      { message: 'Page data not found' },
      { status: 500 }
    );
  }

  return NextResponse.json(pageData);
}
