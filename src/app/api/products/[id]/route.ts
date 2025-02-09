import { supabase } from "@/utils/supabase";
import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _: NextApiRequest,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = await params;

    const { data: product, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id);

    if (error) throw error;
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
