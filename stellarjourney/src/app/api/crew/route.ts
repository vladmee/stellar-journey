import { NextResponse } from 'next/server';

import data from '@/data/data.json';
import { CrewMember } from '@/data/types';

export async function GET(req: Request) {
  const pageData = data.crew as CrewMember[];

  if (pageData === undefined) {
    return NextResponse.json(
      { message: 'Page data not found' },
      { status: 500 }
    );
  }

  return NextResponse.json(pageData);
}
