import {hatsClient, account} from "./index";

/**
 * メインスクリプト
 */
const main = async () => {
  // hatId
  const hatId = 12078056929635765288613843836469385820464693192666109288324349065953280;
  // to address
  const to = "0x1295BDc0C102EB105dC0198fdC193588fe66A1e4";
  // Hatをミントする
  const mintTopHatResult = await hatsClient.mintHat({
    account,
    hatId: BigInt(hatId),
    wearer: to,
  });

  console.log("mintTopHatResult:", mintTopHatResult);
};

main();
