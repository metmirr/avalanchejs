import { Avalanche } from "../../src"
import { GetRewardUTXOsResponse } from "../../src/apis/platformvm/interfaces"
import { PlatformVMAPI } from "../../src/apis/platformvm"

const ip: string = "localhost"
const port: number = 9650
const protocol: string = "http"
const networkID: number = 12345
const avalanche: Avalanche = new Avalanche(ip, port, protocol, networkID)
const pchain: PlatformVMAPI = avalanche.PChain()

const main = async (): Promise<any> => {
  const txID: string = "2nmH8LithVbdjaXsxVQCQfXtzN9hBbmebrsaEYnLM9T32Uy2Y4"
  const encoding: string = "hex"
  const rewardUTXOs: GetRewardUTXOsResponse = await pchain.getRewardUTXOs(
    txID,
    encoding
  )
  console.log(rewardUTXOs)
}

main()
