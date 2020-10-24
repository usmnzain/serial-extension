"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generated using theia-extension-generator
 */
var inversify_1 = require("inversify");
var menu_extension_contribution_1 = require("./menu-extension-contribution");
var common_1 = require("@theia/core/lib/common");
exports.default = new inversify_1.ContainerModule(function (bind) {
    // Replace this line with the desired binding, e.g. "bind(CommandContribution).to(MenuExtensionContribution)
    bind(common_1.CommandContribution).to(menu_extension_contribution_1.ConnectCommandContribution);
    bind(common_1.MenuContribution).to(menu_extension_contribution_1.ConnectMenuContribution);
});
//# sourceMappingURL=menu-extension-frontend-module.js.map