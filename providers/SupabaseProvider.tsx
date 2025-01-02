"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

import { Database } from "@/types_db";

interface SuperbaseProviderProps {
    children: React.ReactNode;
};


const SuperbaseProvider: React.FC<SuperbaseProviderProps> = ({
    children
}) => {
    
    const [supabaseClient] = useState(() =>
        createClientComponentClient<Database>()
    );

    return (
        <SessionContextProvider supabaseClient={supabaseClient}>
            {children}
        </SessionContextProvider>
    )
   
}
 
export default SuperbaseProvider;