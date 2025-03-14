import { supabase } from "@/utils/supabase";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _: NextRequest,
) {
  try {
    const { data: products, error } = await supabase
      .from("products")
      .select("*");

    if (error) throw error;
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
