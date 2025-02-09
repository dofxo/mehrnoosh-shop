import { supabase } from "@/utils/supabase";
import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(_: NextApiRequest) {
  try {
    let { data: products, error } = await supabase.from("products").select("*");

    if (error) throw error;
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
