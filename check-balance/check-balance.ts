import { Connection, LAMPORTS_PER_SOL , PublicKey} from '@solana/web3.js';

const suppliedPublicKey = process.argv[2];
if(!suppliedPublicKey){
    throw new Error("Provide a public key to check balance of !");
}
const connection = new Connection("https://api.mainnet.solana.com","confirmed");

if(PublicKey.isOnCurve(suppliedPublicKey)){
    const publicKey = new PublicKey(suppliedPublicKey);
    const balanceInLamports = await connection.getBalance(publicKey);

    const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

    console.log(
      `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
    );
}else {
    console.log("Wallet address does not validate");
}


