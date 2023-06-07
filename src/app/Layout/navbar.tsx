import Link from "next/link";

export default function Navbar() {
    let version = process.env.VERSION
    let dbName = process.env.DB_NAME
    let rpcEndpoint = process.env.RPC_ENDPOINT
    let singleCollateralPackage = process.env.SINGLE_COLLATERAL_PACKAGE
    let singleCollateralPackageOrigin = process.env.SINGLE_COLLATERAL_PACKAGE_ORIGIN
    let singleCollateralManagerCap = process.env.SINGLE_COLLATERAL_MANAGER_CAP
    let singleCollateralRegistry = process.env.SINGLE_COLLATERAL_REGISTRY
    let singleCollateralDepositVaultRegistry = process.env.SINGLE_COLLATERAL_DEPOSIT_VAULT_REGISTRY
    let singleCollateralBidVaultRegistry = process.env.SINGLE_COLLATERAL_BID_VAULT_REGISTRY
    let oraclePackage = process.env.ORACLE_PACKAGE
    let oracleManagerCap = process.env.ORACLE_MANAGER_CAP
    let suiOracle = process.env.SUI_ORACLE
    let cetusOracle = process.env.CETUS_ORACLE

    return (
        <div className={'rounded-lg shadow-md bg-slate-100'}>
            <div>
                <Link className={'p-2 rounded-lg shadow-md bg-slate-200'} href={'/'}>Home</Link>
                <Link className={'p-2 rounded-lg shadow-md bg-slate-200'} href={'/test-registry'}>Test registry</Link>
            </div>
            <ul className={'p-3 text-xs'}>
                <li>VERSION: <span className={'font-bold bg-slate-200'}>{version}</span></li>
                <li>DB_NAME: <span className={'font-bold bg-slate-200'}>{dbName}</span></li>
                <li>RPC_ENDPOINT: <span className={'font-bold bg-slate-200'}>{rpcEndpoint}</span></li>
                <li>SINGLE_COLLATERAL_PACKAGE: <span
                    className={'font-bold bg-slate-200'}>{singleCollateralPackage}</span></li>
                <li>SINGLE_COLLATERAL_PACKAGE_ORIGIN: <span
                    className={'font-bold bg-slate-200'}>{singleCollateralPackageOrigin}</span></li>
                <li>SINGLE_COLLATERAL_MANAGER_CAP: <span
                    className={'font-bold bg-slate-200'}>{singleCollateralManagerCap}</span>
                </li>
                <li>SINGLE_COLLATERAL_REGISTRY: <span
                    className={'font-bold bg-slate-200'}>{singleCollateralRegistry}</span></li>
                <li>SINGLE_COLLATERAL_DEPOSIT_VAULT_REGISTRY: <span
                    className={'font-bold bg-slate-200'}>{singleCollateralDepositVaultRegistry}</span></li>
                <li>SINGLE_COLLATERAL_BID_VAULT_REGISTRY: <span
                    className={'font-bold bg-slate-200'}>{singleCollateralBidVaultRegistry}</span></li>
                <li>ORACLE_PACKAGE: <span className={'font-bold bg-slate-200'}>{oraclePackage}</span></li>
                <li>ORACLE_MANAGER_CAP: <span className={'font-bold bg-slate-200'}>{oracleManagerCap}</span></li>
                <li>SUI_ORACLE: <span className={'font-bold bg-slate-200'}>{suiOracle}</span></li>
                <li>CETUS_ORACLE : <span className={'font-bold bg-slate-200'}>{cetusOracle}</span></li>
            </ul>
        </div>
    )
}
