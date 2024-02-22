import { validateDelegationAndGetPrincipal } from "@dfinity/sig-verifier-js/sig_verifier_js";

const CHALLENGE = new Uint8Array([
  0xe7, 0x87, 0x5e, 0x69, 0xce, 0x7b, 0xed, 0xa6, 0xfc, 0x7b, 0x6d, 0xfb, 0xd9,
  0xb7, 0x5b, 0xe1, 0xc6, 0xf6, 0xd5, 0xde, 0xba, 0xe3, 0xae, 0x1e, 0xd7, 0xc7,
  0xf8, 0x73, 0xde, 0x1b, 0x6f, 0x9f, 0x75, 0xe9, 0xe7, 0xdc, 0xdd, 0xcf, 0x37,
  0xef, 0xad, 0xdc, 0xdf, 0x6f, 0x7b, 0x69, 0xa7, 0xb5, 0x73, 0x77, 0xb5, 0xdd,
  0xae, 0xf8, 0x7d, 0xee, 0x38, 0x6d, 0xdd, 0x75, 0xe3, 0x9e, 0x9c, 0xd3, 0x9d,
  0x7d, 0x77, 0xde, 0xbc, 0x79, 0xdf, 0x1b, 0x7b, 0x46, 0x9d, 0xf3, 0x6e, 0xb8,
  0xe7, 0xce, 0xf4, 0x7b, 0x4d, 0x5c, 0xef, 0xa7, 0xf5, 0xdf, 0x67, 0xdb, 0xef,
  0xc7, 0x3d, 0xeb, 0xdf, 0x5c,
]);

const DELEGATION_CHAIN_JSON: string = `{
"delegations": [
  {
    "delegation":{
      "expiration":"17b5b384762bfd21",
      "pubkey":"e7875e69ce7beda6fc7b6dfbd9b75be1c6f6d5debae3ae1ed7c7f873de1b6f9f75e9e7dcddcf37efaddcdf6f7b69a7b57377b5ddaef87dee386ddd75e39e9cd39d7d77debc79df1b7b469df36eb8e7cef47b4d5cefa7f5df67dbefc73debdf5c"
    },
    "signature":"d9d9f7a26b6365727469666963617465590547d9d9f7a3647472656583018301830183024863616e697374657283018301830183018301830182045820640c48458731be868c750243066312f4e06b2bfde48309a3cfd0617ee3c8f3448301820458204042fb2844db206e1724a248eef393f5cb1d22280f298d948fc18e0a408533438301820458208d3dbc5b1ac807eb4f313b91712db94fdf4a50068207719f1cba37771b2ac8ef83024a000000000060002701018301830183024e6365727469666965645f6461746182035820a61cee2397ab0f006060d4a7bf4a9bef463d5b2381c502a6c66a26b6d088b64d820458206ccd6bb31a54761d4a56e9cfd8cba384d5b8fb47184e8ca13cb70e04f2209ace82045820c64354fe1474e905acdcf09f6569cfb29c305d0b06806908f2da5ee9404726bf820458203de781de0811f5a8469166c594f9433d966f686f4f4065ad9395e30bfac153e282045820cb2a94057004ae336fb52ba39117cf90aaadefe02ddfe9205bcc13c8f6150a0282045820bc1f9b4c54f66eb8fc25381e90641ae59ef87c590186355162a52cb4875242cb8204582001f9f57686d9eb1af846b6ee42c48b02289fe9cf134f84d527a000e65e4d7443820458201c1f10e2904ed9819f3cf7e051c473151700ea5b8038bf1413ba894b3afac4608204582045c96fb30bf784be7d9da2f7e41a2fa93f728bf07829da23acad05006286c269820458204ffce0d4d1e2124180daef5447fe496bbec7ef22b53786138b4acf523453fa75830182045820d5523abdfb2963caffc236cfe5a7f30a832b152c2f827d6acdf79ed5bb9a690e83024474696d65820349a1fa9b83afaae6da17697369676e6174757265583092eaf174a665a296e8968d910ab5a6130fb7deca606a68f5903d8e6a4b64a0fc609b7b7f6a68146e6c51b35e367deb8b6a64656c65676174696f6ea2697375626e65745f6964581d2c55b347ecf2686c83781d6c59d1b43e7b4cba8deb6c1b376107f2cd026b636572746966696361746559026ed9d9f7a2647472656583018204582075d2df1ca388b2596be5564ca726dbcadf77bbc535811734b704a8846153be1383018302467375626e657483018301830183018204582035bc207266aa1f9a1b4eea393efe91ae33ed4ce77069ed8e881d86716adf7b6b830182045820f8c3eae0377ee00859223bf1c6202f5885c4dcdc8fd13b1d48c3c838688919bc83018302581d2c55b347ecf2686c83781d6c59d1b43e7b4cba8deb6c1b376107f2cd02830183024f63616e69737465725f72616e67657382035832d9d9f782824a000000000060000001014a00000000006000ae0101824a00000000006000b001014a00000000006fffff010183024a7075626c69635f6b657982035885308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c0503020103610090075120778eb21a530a02bcc763e7f4a192933506966af7b54c10a4d2b24de6a86b200e3440bae6267bf4c488d9a11d0472c38c1b6221198f98e4e6882ba38a5a4e3aa5afce899b7f825ed95adfa12629688073556f2747527213e8d73e40ce8204582036f3cd257d90fb38e42597f193a5e031dbd585b6292793bb04db4794803ce06e82045820028fc5e5f70868254e7215e7fc630dbd29eefc3619af17ce231909e1faf97e9582045820ef8995c410ed405731c9b913f67879e3b6a6b4d659d2746db9a6b47d7e70d3d582045820f9a6810df003d2188a807e8370076bd94a996877ec8bd11aa2c4e1358c01c6ab83024474696d65820349e2c9c9e480f6edd917697369676e61747572655830833724e450e6e1c8848118e82b04c5db3964f0869b6fb52af9bdbf3876435a19c798c03b41d5eb5fd39535c4ab24e70464747265658301820458209a7cc9ffcec2242e2e15b45a4e1fb9983c87c5b7e8badb7b92a891b40382f73683024373696783025820c9f3b4b781360e36240c549029e4b0857a6cc31e7230a680e551cab71aae0df38301820458203e26edaf16f66c93c238503a3d2077176e9ce6f0438940679b22cb31a636bfee83025820f49c0d7056981c0f2fdfaf02d219db038e2c448193bbf19642fbf118a8f4739a820340"
  }
],
    "publicKey":"303c300c060a2b0601040183b8430102032c000a00000000006000270101f3ffab2278616508ad5ebfa0cb79a21e08dbb7132f6875b95f81e72067f31302"
}`;
const EXPIRATION: bigint = BigInt(1708469015156620577);
const II_CANISTER_ID: string = "fgte5-ciaaa-aaaad-aaatq-cai";
const USER_PRINCIPAL_ID: string =
  "hf7wk-a35mp-bc6eb-ntvr2-aeu3d-naglw-n6ea3-qn5ps-jcanu-p2vro-5ae";

export var ROOT_PUBLIC_KEY_RAW = new Uint8Array([
  0x81, 0x4c, 0x0e, 0x6e, 0xc7, 0x1f, 0xab, 0x58, 0x3b, 0x08, 0xbd, 0x81, 0x37,
  0x3c, 0x25, 0x5c, 0x3c, 0x37, 0x1b, 0x2e, 0x84, 0x86, 0x3c, 0x98, 0xa4, 0xf1,
  0xe0, 0x8b, 0x74, 0x23, 0x5d, 0x14, 0xfb, 0x5d, 0x9c, 0x0c, 0xd5, 0x46, 0xd9,
  0x68, 0x5f, 0x91, 0x3a, 0x0c, 0x0b, 0x2c, 0xc5, 0x34, 0x15, 0x83, 0xbf, 0x4b,
  0x43, 0x92, 0xe4, 0x67, 0xdb, 0x96, 0xd6, 0x5b, 0x9b, 0xb4, 0xcb, 0x71, 0x71,
  0x12, 0xf8, 0x47, 0x2e, 0x0d, 0x5a, 0x4d, 0x14, 0x50, 0x5f, 0xfd, 0x74, 0x84,
  0xb0, 0x12, 0x91, 0x09, 0x1c, 0x5f, 0x87, 0xb9, 0x88, 0x83, 0x46, 0x3f, 0x98,
  0x09, 0x1a, 0x0b, 0xaa, 0xae,
]);

test("Should validateDelegationAndGetPrincipal", async () => {
  let principal = await validateDelegationAndGetPrincipal(
    CHALLENGE,
    DELEGATION_CHAIN_JSON,
    EXPIRATION - BigInt(42),
    II_CANISTER_ID,
    ROOT_PUBLIC_KEY_RAW
  );
  expect(principal).toEqual(USER_PRINCIPAL_ID);
});

test("Should fail validateDelegationAndGetPrincipal with wrong challenge", async () => {
  try {
    await validateDelegationAndGetPrincipal(
      Uint8Array.from([1, 2, 3, 5]), // wrong challenge
      DELEGATION_CHAIN_JSON,
      EXPIRATION - BigInt(42),
      II_CANISTER_ID,
      ROOT_PUBLIC_KEY_RAW
    );
  } catch (e) {
    expect(e.toString()).toContain("does not match the challenge");
  }
});

test("Should fail validateDelegationAndGetPrincipal with wrong delegation chain", async () => {
  let WRONG_DELEGATION_CHAIN_JSON: string = `{
"delegations": [
  {
    "delegation":{
      "expiration":"17b5b384762bfd21",
      "pubkey":"e7875e69ce7beda6fc7b6d"
    },
  }
],
    "publicKey":"deadbeef"
}`; // missing "signature" after "delegation"
  try {
    await validateDelegationAndGetPrincipal(
      CHALLENGE,
      WRONG_DELEGATION_CHAIN_JSON,
      EXPIRATION - BigInt(42),
      II_CANISTER_ID,
      ROOT_PUBLIC_KEY_RAW
    );
  } catch (e) {
    expect(e.toString()).toContain("Error parsing delegation_chain");
  }
});

test("Should fail validateDelegationAndGetPrincipal with expired delegation", async () => {
  try {
    await validateDelegationAndGetPrincipal(
      CHALLENGE,
      DELEGATION_CHAIN_JSON,
      EXPIRATION + BigInt(42), // past expiration
      II_CANISTER_ID,
      ROOT_PUBLIC_KEY_RAW
    );
  } catch (e) {
    expect(e.toString()).toContain("delegation expired");
  }
});

test("Should fail validateDelegationAndGetPrincipal with wrong II canister id", async () => {
  try {
    await validateDelegationAndGetPrincipal(
      CHALLENGE,
      DELEGATION_CHAIN_JSON,
      EXPIRATION - BigInt(42),
      "jqajs-xiaaa-aaaad-aab5q-cai", // wrong canister id
      ROOT_PUBLIC_KEY_RAW
    );
  } catch (e) {
    expect(e.toString()).toContain("does not match II canister id");
  }
});

test("Should fail validateDelegationAndGetPrincipal with wrong IC root public key", async () => {
  let BAD_ROOT_PK = ROOT_PUBLIC_KEY_RAW;
  BAD_ROOT_PK[42] += 1; // corrupt the public key
  try {
    await validateDelegationAndGetPrincipal(
      CHALLENGE,
      DELEGATION_CHAIN_JSON,
      EXPIRATION - BigInt(42),
      II_CANISTER_ID,
      ROOT_PUBLIC_KEY_RAW
    );
  } catch (e) {
    expect(e.toString()).toContain("signature could not be verified");
  }
});
