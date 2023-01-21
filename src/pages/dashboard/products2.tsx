import * as React from 'react';
import {LayoutDashboard} from "@/components/layout";
import {useFetch} from "@/clients/clientBackendSWR";

export default function Page() {




    const { data, error } = useFetch('/products')


    return (
        <LayoutDashboard>
            {error && <div>Failed to load </div>  }
            {!data && <div>Loading...</div>  }
            {data && <div>Carregou</div>  }
        </LayoutDashboard>
    );
}