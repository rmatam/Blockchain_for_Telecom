const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

/*bitcoin.createNewBlock(2389,'OIUOPUPOI','POIUOIUOO');
bitcoin.createNewtransaction(23409,'OIUOPREUPOISDDKK','SDFFFFDPOIUOIUOO');
bitcoin.createNewBlock(23839,'OIUOPUPOID','POIUOIUOODFS');
bitcoin.createNewtransaction(250,'OIUOPREUPOISDDKK','SDFFFFDPOIUOIUOO');
bitcoin.createNewtransaction(50,'OIUOPREUPOISDDKK','SDFFFFDPOIUOIUOO');
bitcoin.createNewtransaction(2000,'OIUOPREUPOISDDKK','SDFFFFDPOIUOIUOO');
bitcoin.createNewBlock(8839,'OIUOYTUPUPOID','PYTUYUOIUOODFS');
*/

/*
const prevousblockHash = 'JHKJHLJLKJJHLKJJHKJJHKJHKHKJJKJJUWU';
const currentBlockData = [
	{
		amount: 100,
		sender: 'JHLKJHKHLKHKHLKHKJJHLKLIUYOUHKJ',
		recipient: 'OOUYIUYIUIKKKGJHGJKHGKJGJKHG'
	},
	{
		amount: 300,
		sender: 'JHLKJHKHLKJLLKHKHLKHKJJHLKLIUYOUHKJ',
		recipient: 'OOUYIUYIUIKKKGNBMNJHGJKHGKJGJKHG'
	},
	{
		amount: 400,
		sender: 'JHLKJHKHJHKJHLKHKHLKHKJJHLKLIUYOUHKJ',
		recipient: 'OOUYIUNYIUIKKKGJHGJKHGKJGJKHG'
	}
];
const nonce = 100;
console.log(bitcoin.proofOfWork(prevousblockHash,currentBlockData));

//console.log(bitcoin.hashBlock(prevousblockHash,currentBlockData,nonce))

//console.log(bitcoin.chain[2]);
*/

const bc1 = {
"chain": [
{
"index": 1,
"timestamp": 1533412621846,
"transcatios": [],
"nonce": 100,
"hash": "0",
"prevousblockHash": "0"
},
{
"index": 2,
"timestamp": 1533412746277,
"transcatios": [],
"nonce": 18140,
"hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
"prevousblockHash": "0"
},
{
"index": 3,
"timestamp": 1533412763885,
"transcatios": [
{
"amount": 12.5,
"sender": "00",
"recipient": "8db27b60982011e896532b456bfec605",
"transactionId": "d7e11cf0982011e896532b456bfec605"
}
],
"nonce": 36817,
"hash": "000029fa7682404b0a5b5c14a0d24e5a3be7b7aeb374b0ba5b03d0f261256666",
"prevousblockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
},
{
"index": 4,
"timestamp": 1533412767842,
"transcatios": [
{
"amount": 12.5,
"sender": "00",
"recipient": "8db27b60982011e896532b456bfec605",
"transactionId": "e25c5f00982011e896532b456bfec605"
}
],
"nonce": 62123,
"hash": "0000c3caf203214f9eb5f93f2e19ea64ed99e8a78004340e12fe88e493c02717",
"prevousblockHash": "000029fa7682404b0a5b5c14a0d24e5a3be7b7aeb374b0ba5b03d0f261256666"
},
{
"index": 5,
"timestamp": 1533412876336,
"transcatios": [
{
"amount": 12.5,
"sender": "00",
"recipient": "8db27b60982011e896532b456bfec605",
"transactionId": "e4b80240982011e896532b456bfec605"
},
{
"amount": 1000,
"sender": "DSDFDFDDJKHKJKFFGFG",
"recipient": "lKSDFDBNMBNKFMDKMKGFG",
"transactionId": "0b8071f0982111e896532b456bfec605"
},
{
"amount": 2000,
"sender": "DSDFDFDDJKHKJKFFGFG",
"recipient": "lKSDFDBNMBNKFMDKMKGFG",
"transactionId": "16d76e00982111e896532b456bfec605"
},
{
"amount": 3000,
"sender": "DSDFDFDDJKHKJKFFGFG",
"recipient": "lKSDFDBNMBNKFMDKMKGFG",
"transactionId": "19a9a0d0982111e896532b456bfec605"
}
],
"nonce": 4245,
"hash": "00002c980e9a28a10a967e6929def6118f486522847322166af67251500c2adf",
"prevousblockHash": "0000c3caf203214f9eb5f93f2e19ea64ed99e8a78004340e12fe88e493c02717"
},
{
"index": 6,
"timestamp": 1533412961601,
"transcatios": [
{
"amount": 12.5,
"sender": "00",
"recipient": "8db27b60982011e896532b456bfec605",
"transactionId": "2562e120982111e896532b456bfec605"
},
{
"amount": 4000,
"sender": "DSDFDFDDJKHKJKFFGFG",
"recipient": "lKSDFDBNMBNKFMDKMKGFG",
"transactionId": "43644e70982111e896532b456bfec605"
},
{
"amount": 5000,
"sender": "DSDFDFDDJKHKJKFFGFG",
"recipient": "lKSDFDBNMBNKFMDKMKGFG",
"transactionId": "466d48b0982111e896532b456bfec605"
},
{
"amount": 6000,
"sender": "DSDFDFDDJKHKJKFFGFG",
"recipient": "lKSDFDBNMBNKFMDKMKGFG",
"transactionId": "49818d90982111e896532b456bfec605"
},
{
"amount": 7000,
"sender": "DSDFDFDDJKHKJKFFGFG",
"recipient": "lKSDFDBNMBNKFMDKMKGFG",
"transactionId": "4c9f4850982111e896532b456bfec605"
}
],
"nonce": 123867,
"hash": "0000e57bde7d499990badad1c61a4fb7bb67d7f936a7a5612b58183d7a2fd430",
"prevousblockHash": "00002c980e9a28a10a967e6929def6118f486522847322166af67251500c2adf"
},
{
"index": 7,
"timestamp": 1533412979779,
"transcatios": [
{
"amount": 12.5,
"sender": "00",
"recipient": "8db27b60982011e896532b456bfec605",
"transactionId": "58398ef0982111e896532b456bfec605"
}
],
"nonce": 153,
"hash": "0000d6d49bfa4ac8933f13e20745c317acba4ba4a6695c017dd07d3365d1c844",
"prevousblockHash": "0000e57bde7d499990badad1c61a4fb7bb67d7f936a7a5612b58183d7a2fd430"
},
{
"index": 8,
"timestamp": 1533412982092,
"transcatios": [
{
"amount": 12.5,
"sender": "00",
"recipient": "8db27b60982011e896532b456bfec605",
"transactionId": "630b2e60982111e896532b456bfec605"
}
],
"nonce": 4270,
"hash": "0000674167da0a8190e25f6df0b5269be56070c83aeefd4d076816444ae31911",
"prevousblockHash": "0000d6d49bfa4ac8933f13e20745c317acba4ba4a6695c017dd07d3365d1c844"
},
{
"index": 9,
"timestamp": 1533412984030,
"transcatios": [
{
"amount": 12.5,
"sender": "00",
"recipient": "8db27b60982011e896532b456bfec605",
"transactionId": "646bf6e0982111e896532b456bfec605"
}
],
"nonce": 1307,
"hash": "00000d83e5e15f067e83bd6bdf5772be9364b5332395c350fe54ab800dc4941d",
"prevousblockHash": "0000674167da0a8190e25f6df0b5269be56070c83aeefd4d076816444ae31911"
},
{
"index": 10,
"timestamp": 1533412986232,
"transcatios": [
{
"amount": 12.5,
"sender": "00",
"recipient": "8db27b60982011e896532b456bfec605",
"transactionId": "659386f0982111e896532b456bfec605"
}
],
"nonce": 183536,
"hash": "0000cbe81549e1f0b9beb26f150de76d16b9e51c9c65ad97fe95720c4422021f",
"prevousblockHash": "00000d83e5e15f067e83bd6bdf5772be9364b5332395c350fe54ab800dc4941d"
}
],
"pendingTransactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "8db27b60982011e896532b456bfec605",
"transactionId": "66e3ada0982111e896532b456bfec605"
}
],
"currentNodeUrl": "http://localhost:3001",
"networkNodes": []
};

console.log('VALID:',bitcoin.chainIsValid(bc1.chain));