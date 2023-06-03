import Layout from "@/app/Layout/layout";
import {useEffect, useState} from "react";
import {getRegistry} from "@typus/typus-sdk/lib/utils/typus-dov-single/registry";
import {Connection, JsonRpcProvider} from "@mysten/sui.js";

const provider = new JsonRpcProvider(new Connection({fullnode: process.env.RPC_ENDPOINT}));

export default function TestRegistry() {
    const [data, setData] = useState()

    useEffect(() => {
        (async () => {
            let result = await getRegistry(provider, process.env.SINGLE_COLLATERAL_REGISTRY);
            let data = JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2)
            setData(data)
        })();
    }, [])

    return (
        <Layout>
            <br/>
            <div>getRegistry</div>
            <small>
                <pre>{data}</pre>
            </small>
        </Layout>
    )
}
