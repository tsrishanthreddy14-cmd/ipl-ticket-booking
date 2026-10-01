import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bhgtsnpfoihqhnhkqagi.supabase.co";
const supabaseKey = "sb_publishable_ifCEIVHRS8yNL8pm7MQvKA_YTQT_vGH";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);