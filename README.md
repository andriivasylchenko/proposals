# Transferring leads from Node.js application to Salesforce using App Connect

*This application is a part of [App Connect PoT scenario](https://mapie.help/projects/appcpot/).*

In this scenario, you are helping salesman to automate the process of transferring leads from custom application to Salesforce. You will create a shared application instance, transfer a lead to Salesforce from it, and share the new flow as a managed API via IBM Cloud native API management.

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/bSwbjkyMHvQ/0.jpg)](https://www.youtube.com/watch?v=bSwbjkyMHvQ)

**PoT duration:** 30 minutes

**Takeaways:**
* how-to configure API Management for Cloud Foundry apps
* how-to add Cloud Foundry application to App Connect flow
* how-to integrate Cloud Foundry application with Salesforce using App Connect
* how-to share App Connect flow via IBM Cloud native API Management capabilities

Check End-to-end walkthrough video by clicking on the image below

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/Ybt7OYPwfno/0.jpg)](https://www.youtube.com/watch?v=Ybt7OYPwfno)

## Pre-requisites

### You must have an IBM Cloud account.

The account is free and provides access to everything you need to develop, track, plan, and deploy apps. <a href="https://console.bluemix.net/registration/?cm_mmc=IBMBluemixGarageMethod-_-MethodSite-_-10-19-15::12-31-18-_-bm_reg" target="_blank">Sign up for a trial</a>. The account requires an IBMid. If you don't have an IBMid, you can create one when you register.

### You must have an <a href="https://console.bluemix.net/catalog/services/app-connect" target="_blank">App Connect instance</a> on IBM Cloud.

Lite, Enterprise or Professional pricing plans can be selected.

### The name and password of your Salesforce account.

If you want to create a free test account in Salesforce rather than use your business account, make sure that you register for a <a href="https://developer.salesforce.com" target="_blank">Developer account</a> rather than a trial account. If you connect to App Connect with a Trial account, the Salesforce events will not work.

### You must have <a href="https://github.com/cloudfoundry/cli#downloads" target="_blank">Cloud Foundry CLI</a> installed 

Cloud Foundry CLI is the official command line client for Cloud Foundry. 
