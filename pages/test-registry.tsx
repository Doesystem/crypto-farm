import Layout from "@/app/Layout/layout";
import {useEffect, useState} from "react";
import {getPackageVersion, getRegistry} from "@typus/typus-sdk/lib/utils/typus-dov-single/registry";
import {Connection, JsonRpcProvider} from "@mysten/sui.js";

const provider = new JsonRpcProvider(new Connection({fullnode: process.env.RPC_ENDPOINT}));

export default function TestRegistry() {
    const [registry, setRegistry] = useState()
    const [packageVersion, setPackageVersion] = useState()

    useEffect(() => {
        (async () => {
            let resultRegistry = await getRegistry(provider, process.env.SINGLE_COLLATERAL_REGISTRY);
            let dataRegistry = JSON.stringify(resultRegistry, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2)

            let resultPckageVersion = await getPackageVersion(provider, process.env.SINGLE_COLLATERAL_PACKAGE);
            let dataPackageVersion = JSON.stringify(resultPckageVersion, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2)

            setRegistry(dataRegistry)
            setPackageVersion(dataPackageVersion)
        })();
    }, [])

    return (
        <Layout>
            <div className={'rounded-lg shadow-md m-3 p-3'}>
                <h3>getRegistry</h3>
                <small>
                    <pre>{registry}</pre>
                </small>
            </div>

            <div className={'rounded-lg shadow-md m-3 p-3'}>
                <h3>getPackageVersion</h3>
                <small>
                    <pre>{packageVersion}</pre>
                </small>
            </div>

        </Layout>
    )
}
