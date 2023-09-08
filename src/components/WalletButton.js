import React from 'react'
import {
    ENVIRONMENTS,
    L1_PROVIDERS,
    WalletSDK,
} from '@imtbl/wallet-sdk-web';




const WalletButton = () => {
    const handleConnectClick = async () => {
        try {
            // Builds the Wallet SDK object
            const sdk = await WalletSDK.build({
                env: ENVIRONMENTS.STAGING,
                rpc: {
                    5: 'https://goerli.mycustomnode.com',
                },
                chainID: 5,
            });

            // Connects on the chosen provider - WalletConnect
            // const walletConnection = await sdk.connect({ provider: L1_PROVIDERS.WALLET_CONNECT });
            // For Metamask:
            const walletConnection = await sdk.connect({ provider: L1_PROVIDERS.METAMASK });

            // Register the user using the Core SDK
            await coreSdkWorkflows.registerOffchain(walletConnection);
        } catch (error) {
            // Handle any errors that may occur during the connection or registration process
            console.error('Error:', error);
        }
    };


    return (
        <button onClick={handleConnectClick} className='py-2 px-4 bg-red-400 text-white'>Connect Wallet</button>
    )
}

export default WalletButton