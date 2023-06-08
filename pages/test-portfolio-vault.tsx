import Layout from "@/app/Layout/layout";
import {useEffect, useState} from "react";
import {getPortfolioVaults} from "@typus/typus-sdk/lib/utils/typus-dov-single/portfolio-vault";
import {Connection, JsonRpcProvider} from "@mysten/sui.js";

const provider = new JsonRpcProvider(new Connection({fullnode: process.env.RPC_ENDPOINT}));

export default function TestPortfolioVault() {
    const [portfolioVaults, setPortfolioVaults] = useState()
    const [actionDelayTsMs, setActionDelayTsMs] = useState()

    useEffect(() => {
        (async () => {
            let resultPortfolioVaults = await getPortfolioVaults(
                provider,
                process.env.SINGLE_COLLATERAL_REGISTRY,
                process.env.SINGLE_COLLATERAL_DEPOSIT_VAULT_REGISTRY,
                process.env.SINGLE_COLLATERAL_BID_VAULT_REGISTRY
            );
            let dataPortfolioVaults = JSON.stringify(resultPortfolioVaults, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2)
            //
            // let resultPckageVersion = await getPackageVersion(provider, process.env.SINGLE_COLLATERAL_PACKAGE);
            // let dataPackageVersion = JSON.stringify(resultPckageVersion, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2)
            //
            setPortfolioVaults(dataPortfolioVaults)
            // setPackageVersion(dataPackageVersion)
        })();
    }, [])

    return (
        <Layout>
            <div className={'rounded-lg shadow-md m-3 p-3'}>
                <h3>getPortfolioVaults</h3>
                <small>
                    <pre>{portfolioVaults}</pre>
                </small>
            </div>

            <div className={'rounded-lg shadow-md m-3 p-3'}>
                <h3>getPortfolioVaultAuctionDelayTsMs</h3>
                <small>
                    <pre>{actionDelayTsMs}</pre>
                </small>
            </div>
        </Layout>
    )
}
