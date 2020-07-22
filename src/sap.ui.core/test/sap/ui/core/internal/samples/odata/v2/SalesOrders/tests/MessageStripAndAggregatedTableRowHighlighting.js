/*!
 * ${copyright}
 */
sap.ui.define([
	"sap/ui/test/opaQunit",
	"sap/ui/test/Opa5"
], function (opaTest, Opa5) {
	"use strict";

	//*****************************************************************************
	opaTest("Check item specific messages", function (Given, When, Then) {
		When.onMainPage.showSalesOrder("102");
		Then.onMainPage.checkSalesOrderLoaded("102");
		Then.onMainPage.checkSalesOrderItemsLoaded("102");

		When.onMainPage.changeItemNote(0, "info");
		When.onMainPage.pressSalesOrderSaveButton();
		Then.onMainPage.checkMessageStrip("Information");

		When.onMainPage.changeItemQuantity(1, 1);
		When.onMainPage.pressSalesOrderSaveButton();

		When.onMainPage.toggleMessagePopover();
		Then.onMainPage.checkMessagePopoverOpen();
		Then.onMainPage.checkMessageInPopover("020", "order");
		When.onMainPage.toggleMessagePopover();
		Then.onMainPage.checkTableRowHighlight(1, "Warning");

		When.onMainPage.changeItemNote(1, "error");
		When.onMainPage.pressSalesOrderSaveButton();

		When.onMainPage.toggleMessagePopover();
		Then.onMainPage.checkMessagePopoverOpen();
		Then.onMainPage.checkMessageInPopover("020", "errorNoPrefix");
		When.onMainPage.toggleMessagePopover();
		Then.onMainPage.checkTableRowHighlight(1, "Error");

		When.onMainPage.showSalesOrder("102.2");
		Then.onMainPage.checkSalesOrderLoaded("102.2");
		Then.onMainPage.checkSalesOrderItemsLoaded("102.2");

		When.onMainPage.changeItemNote(0, "errorNoPrefix");
		When.onMainPage.pressSalesOrderSaveButton();
		Then.onMainPage.checkTableRowHighlight(0, "Warning");
	});
});