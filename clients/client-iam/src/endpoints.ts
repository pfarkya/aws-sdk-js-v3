import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "aws-cn-global": {
    hostname: "iam.cn-north-1.amazonaws.com.cn",
    signingRegion: "cn-north-1",
  },
  "aws-global": {
    hostname: "iam.amazonaws.com",
    signingRegion: "us-east-1",
  },
  "aws-global-fips": {
    hostname: "iam-fips.amazonaws.com",
    signingRegion: "us-east-1",
  },
  "aws-iso-b-global": {
    hostname: "iam.us-isob-east-1.sc2s.sgov.gov",
    signingRegion: "us-isob-east-1",
  },
  "aws-iso-global": {
    hostname: "iam.us-iso-east-1.c2s.ic.gov",
    signingRegion: "us-iso-east-1",
  },
  "aws-us-gov-global": {
    hostname: "iam.us-gov.amazonaws.com",
    signingRegion: "us-gov-west-1",
  },
  "aws-us-gov-global-fips": {
    hostname: "iam.us-gov.amazonaws.com",
    signingRegion: "us-gov-west-1",
  },
  "iam-fips": {
    hostname: "iam-fips.amazonaws.com",
    signingRegion: "us-east-1",
  },
  "iam-govcloud-fips": {
    hostname: "iam.us-gov.amazonaws.com",
    signingRegion: "us-gov-west-1",
  },
};

const partitionHash: PartitionHash = {
  aws: {
    regions: [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "aws-global",
      "aws-global-fips",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "iam",
      "iam-fips",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2",
    ],
    regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
    endpoint: "aws-global",
  },
  "aws-cn": {
    regions: ["aws-cn-global", "cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    endpoint: "aws-cn-global",
  },
  "aws-iso": {
    regions: ["aws-iso-global", "us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    endpoint: "aws-iso-global",
  },
  "aws-iso-b": {
    regions: ["aws-iso-b-global", "us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    endpoint: "aws-iso-b-global",
  },
  "aws-us-gov": {
    regions: [
      "aws-us-gov-global",
      "aws-us-gov-global-fips",
      "iam-govcloud",
      "iam-govcloud-fips",
      "us-gov-east-1",
      "us-gov-west-1",
    ],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    endpoint: "aws-us-gov-global",
  },
};

export const defaultRegionInfoProvider: RegionInfoProvider = async (
  region: string,
  options?: RegionInfoProviderOptions
) =>
  getRegionInfo(region, {
    ...options,
    signingService: "iam",
    regionHash,
    partitionHash,
  });