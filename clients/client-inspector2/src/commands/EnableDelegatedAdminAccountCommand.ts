import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { EnableDelegatedAdminAccountRequest, EnableDelegatedAdminAccountResponse } from "../models/models_0";
import {
  deserializeAws_restJson1EnableDelegatedAdminAccountCommand,
  serializeAws_restJson1EnableDelegatedAdminAccountCommand,
} from "../protocols/Aws_restJson1";

export interface EnableDelegatedAdminAccountCommandInput extends EnableDelegatedAdminAccountRequest {}
export interface EnableDelegatedAdminAccountCommandOutput
  extends EnableDelegatedAdminAccountResponse,
    __MetadataBearer {}

/**
 * <p>Enables the Amazon Inspector delegated administrator for your Organizations organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, EnableDelegatedAdminAccountCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, EnableDelegatedAdminAccountCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const command = new EnableDelegatedAdminAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableDelegatedAdminAccountCommandInput} for command's `input` shape.
 * @see {@link EnableDelegatedAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 */
export class EnableDelegatedAdminAccountCommand extends $Command<
  EnableDelegatedAdminAccountCommandInput,
  EnableDelegatedAdminAccountCommandOutput,
  Inspector2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableDelegatedAdminAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Inspector2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableDelegatedAdminAccountCommandInput, EnableDelegatedAdminAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Inspector2Client";
    const commandName = "EnableDelegatedAdminAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableDelegatedAdminAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: EnableDelegatedAdminAccountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableDelegatedAdminAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1EnableDelegatedAdminAccountCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableDelegatedAdminAccountCommandOutput> {
    return deserializeAws_restJson1EnableDelegatedAdminAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}