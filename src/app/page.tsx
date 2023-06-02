"use client"

import {useEffect, useState} from 'react'

import {Connection, JsonRpcProvider} from "@mysten/sui.js";
import {getRegistry} from '@typus/typus-sdk/lib/utils/typus-dov-single/registry'

const provider = new JsonRpcProvider(new Connection({fullnode: process.env.RPC_ENDPOINT}));

export default function Home() {
    const [data, setData] = useState()

    useEffect(() => {
        (async () => {
            let result = await getRegistry(provider, "0xb44c0fa1ab40f7699be3dce02475965a636ed850348435abb3b797b273f6c551");
            let data = JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2)
            setData(data)
        })();
    }, [])

    return (
        <main>
            <h3>getRegistry</h3>
            <small>
                <pre>{data}</pre>
            </small>
        </main>
    )
}
