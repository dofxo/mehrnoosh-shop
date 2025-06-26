import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error(
    "❌ Missing SUPABASE_URL or SUPABASE_KEY environment variable.",
  );
  process.exit(1);
}

export const supabase = createClient(supabaseUrl, supabaseKey);

async function updateKeepalive() {
  try {
    const now = new Date().toISOString();

    const { data, error } = await supabase
      .from("keepalive")
      .update({ last_ping: now })
      .eq("id", 1);

    if (error) throw error;

    console.log("✅ keep-alive ping:", now);
  } catch (err) {
    console.error("❌ error pinging supabase:", err.message);
    process.exit(1);
  }
}

updateKeepalive();
