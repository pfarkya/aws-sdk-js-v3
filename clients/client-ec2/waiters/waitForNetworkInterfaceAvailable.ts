import { EC2Client } from "../EC2Client";
import {
  DescribeNetworkInterfacesCommand,
  DescribeNetworkInterfacesCommandInput,
} from "../commands/DescribeNetworkInterfacesCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: EC2Client, input: DescribeNetworkInterfacesCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeNetworkInterfacesCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.NetworkInterfaces);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (let element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "available";
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "InvalidNetworkInterfaceID.NotFound") {
      return { state: WaiterState.FAILURE, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilNetworkInterfaceAvailable instead. waitForNetworkInterfaceAvailable does not throw error in non-success cases.
 */
export const waitForNetworkInterfaceAvailable = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeNetworkInterfacesCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeNetworkInterfacesCommand for polling.
 */
export const waitUntilNetworkInterfaceAvailable = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeNetworkInterfacesCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};