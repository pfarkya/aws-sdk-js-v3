// smithy-typescript generated code
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  RegionInfoProvider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import {
  ConvertRecoveryPointToSnapshotCommandInput,
  ConvertRecoveryPointToSnapshotCommandOutput,
} from "./commands/ConvertRecoveryPointToSnapshotCommand";
import {
  CreateEndpointAccessCommandInput,
  CreateEndpointAccessCommandOutput,
} from "./commands/CreateEndpointAccessCommand";
import { CreateNamespaceCommandInput, CreateNamespaceCommandOutput } from "./commands/CreateNamespaceCommand";
import { CreateSnapshotCommandInput, CreateSnapshotCommandOutput } from "./commands/CreateSnapshotCommand";
import { CreateUsageLimitCommandInput, CreateUsageLimitCommandOutput } from "./commands/CreateUsageLimitCommand";
import { CreateWorkgroupCommandInput, CreateWorkgroupCommandOutput } from "./commands/CreateWorkgroupCommand";
import {
  DeleteEndpointAccessCommandInput,
  DeleteEndpointAccessCommandOutput,
} from "./commands/DeleteEndpointAccessCommand";
import { DeleteNamespaceCommandInput, DeleteNamespaceCommandOutput } from "./commands/DeleteNamespaceCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import { DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput } from "./commands/DeleteSnapshotCommand";
import { DeleteUsageLimitCommandInput, DeleteUsageLimitCommandOutput } from "./commands/DeleteUsageLimitCommand";
import { DeleteWorkgroupCommandInput, DeleteWorkgroupCommandOutput } from "./commands/DeleteWorkgroupCommand";
import { GetCredentialsCommandInput, GetCredentialsCommandOutput } from "./commands/GetCredentialsCommand";
import { GetEndpointAccessCommandInput, GetEndpointAccessCommandOutput } from "./commands/GetEndpointAccessCommand";
import { GetNamespaceCommandInput, GetNamespaceCommandOutput } from "./commands/GetNamespaceCommand";
import { GetRecoveryPointCommandInput, GetRecoveryPointCommandOutput } from "./commands/GetRecoveryPointCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "./commands/GetResourcePolicyCommand";
import { GetSnapshotCommandInput, GetSnapshotCommandOutput } from "./commands/GetSnapshotCommand";
import { GetUsageLimitCommandInput, GetUsageLimitCommandOutput } from "./commands/GetUsageLimitCommand";
import { GetWorkgroupCommandInput, GetWorkgroupCommandOutput } from "./commands/GetWorkgroupCommand";
import { ListEndpointAccessCommandInput, ListEndpointAccessCommandOutput } from "./commands/ListEndpointAccessCommand";
import { ListNamespacesCommandInput, ListNamespacesCommandOutput } from "./commands/ListNamespacesCommand";
import { ListRecoveryPointsCommandInput, ListRecoveryPointsCommandOutput } from "./commands/ListRecoveryPointsCommand";
import { ListSnapshotsCommandInput, ListSnapshotsCommandOutput } from "./commands/ListSnapshotsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListUsageLimitsCommandInput, ListUsageLimitsCommandOutput } from "./commands/ListUsageLimitsCommand";
import { ListWorkgroupsCommandInput, ListWorkgroupsCommandOutput } from "./commands/ListWorkgroupsCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "./commands/PutResourcePolicyCommand";
import {
  RestoreFromRecoveryPointCommandInput,
  RestoreFromRecoveryPointCommandOutput,
} from "./commands/RestoreFromRecoveryPointCommand";
import {
  RestoreFromSnapshotCommandInput,
  RestoreFromSnapshotCommandOutput,
} from "./commands/RestoreFromSnapshotCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateEndpointAccessCommandInput,
  UpdateEndpointAccessCommandOutput,
} from "./commands/UpdateEndpointAccessCommand";
import { UpdateNamespaceCommandInput, UpdateNamespaceCommandOutput } from "./commands/UpdateNamespaceCommand";
import { UpdateSnapshotCommandInput, UpdateSnapshotCommandOutput } from "./commands/UpdateSnapshotCommand";
import { UpdateUsageLimitCommandInput, UpdateUsageLimitCommandOutput } from "./commands/UpdateUsageLimitCommand";
import { UpdateWorkgroupCommandInput, UpdateWorkgroupCommandOutput } from "./commands/UpdateWorkgroupCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | ConvertRecoveryPointToSnapshotCommandInput
  | CreateEndpointAccessCommandInput
  | CreateNamespaceCommandInput
  | CreateSnapshotCommandInput
  | CreateUsageLimitCommandInput
  | CreateWorkgroupCommandInput
  | DeleteEndpointAccessCommandInput
  | DeleteNamespaceCommandInput
  | DeleteResourcePolicyCommandInput
  | DeleteSnapshotCommandInput
  | DeleteUsageLimitCommandInput
  | DeleteWorkgroupCommandInput
  | GetCredentialsCommandInput
  | GetEndpointAccessCommandInput
  | GetNamespaceCommandInput
  | GetRecoveryPointCommandInput
  | GetResourcePolicyCommandInput
  | GetSnapshotCommandInput
  | GetUsageLimitCommandInput
  | GetWorkgroupCommandInput
  | ListEndpointAccessCommandInput
  | ListNamespacesCommandInput
  | ListRecoveryPointsCommandInput
  | ListSnapshotsCommandInput
  | ListTagsForResourceCommandInput
  | ListUsageLimitsCommandInput
  | ListWorkgroupsCommandInput
  | PutResourcePolicyCommandInput
  | RestoreFromRecoveryPointCommandInput
  | RestoreFromSnapshotCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateEndpointAccessCommandInput
  | UpdateNamespaceCommandInput
  | UpdateSnapshotCommandInput
  | UpdateUsageLimitCommandInput
  | UpdateWorkgroupCommandInput;

export type ServiceOutputTypes =
  | ConvertRecoveryPointToSnapshotCommandOutput
  | CreateEndpointAccessCommandOutput
  | CreateNamespaceCommandOutput
  | CreateSnapshotCommandOutput
  | CreateUsageLimitCommandOutput
  | CreateWorkgroupCommandOutput
  | DeleteEndpointAccessCommandOutput
  | DeleteNamespaceCommandOutput
  | DeleteResourcePolicyCommandOutput
  | DeleteSnapshotCommandOutput
  | DeleteUsageLimitCommandOutput
  | DeleteWorkgroupCommandOutput
  | GetCredentialsCommandOutput
  | GetEndpointAccessCommandOutput
  | GetNamespaceCommandOutput
  | GetRecoveryPointCommandOutput
  | GetResourcePolicyCommandOutput
  | GetSnapshotCommandOutput
  | GetUsageLimitCommandOutput
  | GetWorkgroupCommandOutput
  | ListEndpointAccessCommandOutput
  | ListNamespacesCommandOutput
  | ListRecoveryPointsCommandOutput
  | ListSnapshotsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListUsageLimitsCommandOutput
  | ListWorkgroupsCommandOutput
  | PutResourcePolicyCommandOutput
  | RestoreFromRecoveryPointCommandOutput
  | RestoreFromSnapshotCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateEndpointAccessCommandOutput
  | UpdateNamespaceCommandOutput
  | UpdateSnapshotCommandOutput
  | UpdateUsageLimitCommandOutput
  | UpdateWorkgroupCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: DefaultsMode | Provider<DefaultsMode>;
}

type RedshiftServerlessClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of RedshiftServerlessClient class constructor that set the region, credentials and other options.
 */
export interface RedshiftServerlessClientConfig extends RedshiftServerlessClientConfigType {}

type RedshiftServerlessClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of RedshiftServerlessClient class. This is resolved and normalized from the {@link RedshiftServerlessClientConfig | constructor configuration interface}.
 */
export interface RedshiftServerlessClientResolvedConfig extends RedshiftServerlessClientResolvedConfigType {}

/**
 * <p>
 *             <i>This is prerelease documentation for Amazon Redshift Serverless, which is in preview release.
 *            The documentation and the feature are both subject to change. We recommend that you use this feature only in test environments,
 *            and not in production environments. For preview terms and conditions, see Beta Service Participation in
 *            <a href="https://docs.aws.amazon.com/https:/aws.amazon.com/service-terms">Amazon Web Services Service Terms</a>.</i>
 *          </p>
 *         <p>This is an interface reference for Amazon Redshift Serverless.
 *            It contains documentation for one of the programming or command line interfaces you can use to manage Amazon Redshift Serverless.
 *         </p>
 *         <p>Amazon Redshift Serverless automatically provisions data warehouse capacity and intelligently scales the
 *            underlying resources based on workload demands. Amazon Redshift Serverless adjusts capacity in seconds to deliver consistently high
 *            performance and simplified operations for even the most demanding and volatile workloads. Amazon Redshift Serverless lets you
 *            focus on using your data to acquire new insights for your business and customers.
 *         </p>
 *         <p>
 *            To learn more about Amazon Redshift Serverless,
 *            see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-whatis.html">What is Amazon Redshift Serverless</a>.
 *         </p>
 */
export class RedshiftServerlessClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  RedshiftServerlessClientResolvedConfig
> {
  /**
   * The resolved configuration of RedshiftServerlessClient class. This is resolved and normalized from the {@link RedshiftServerlessClientConfig | constructor configuration interface}.
   */
  readonly config: RedshiftServerlessClientResolvedConfig;

  constructor(configuration: RedshiftServerlessClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveRegionConfig(_config_0);
    const _config_2 = resolveEndpointsConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveHostHeaderConfig(_config_3);
    const _config_5 = resolveAwsAuthConfig(_config_4);
    const _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}