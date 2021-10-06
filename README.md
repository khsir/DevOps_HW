<h1 align=>NUS FinTech: DevOps CI/CD</h1>

# Overview <br>

##### CI/CD through GitHub Actions

GitHub Actions offers a large variety of tools for workflows. The two that I eventually worked with are [Docker CI] (https://github.com/khsir/DevOps_HW/blob/main/.github/workflows/docker-image.yml). 

##### Deployed Page

The deployed page uses a javascript(JS) to connect to [coinranking] (https://coinranking.com/) API to pull information on cryptocurrencies:-

https://khsir.github.io/DevOps_HW/index.html



The [Docker CI and Telegram Notification](https://github.com/ericiachan/devops-cicd/actions/workflows/dockerci-notify.yml) workflow automates the build and push of the Docker Image to Docker Hub, and triggers a Telegram notification with details on the changes committed, which sent is through a Telegram Bot (@devops-cicd-bot). 

The [Google Cloud Run Deployment](https://github.com/ericiachan/devops-cicd/blob/main/.github/workflows/deploy.yml) workflow automates the setup, build, publishing and deployment of the project to Google Cloud Run. 
<br>
<br>
## Step 1: Initialise a Repository 


Begin by initializing an empty repository and uploading the necessary files to the respository. 
<br>
<br>
## Part II: Exploring GitHub Marketplace
The [GitHub Marketplace](https://github.com/marketplace) is filled with plenty of interesting tools for workflow improvements. For this project, the intention was to include a notification action in the workflow that alerts the user on changes made with each iteration of workflow executed.

Tapping into the numerous notification options available, a Telegram notification action was the eventual choice for this project.

## Part III: Docker CI and Telegram Notification Workflow
The first part of the workflow focuses on building and pushing the Docker Image to a repository in Docker Hub. Each time a Github Event (Push/Pull) is committed, the workflow will be triggered and the aforementioned action will take place. 

The following parameters are required:

| Key                    | Input                                    | 
| ---------------------- |------------------------------------------| 
| <b>`username`</b>      | Docker username                          | 
| <b>`password`</b>      | Docker account password or access token  |
| <b>`tags`</b>          | Name of Docker repository                | 


###### <i>Important Note: [Github Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets) is key to this workflow.</i> <br>

Once the workflow has been executed successfully, changes to the Docker Hub repository should be reflected.

**_Before workflow execution:_**

<img src ="images/docker-empty-repository.png" width="600">

**_After workflow execution:_**

<img src ="images/docker-push-success.png" width="600">


## Sending a Telegram Notification
Building on the existing workflow, the second half incorporates a Telegram notification action. Upon the Github Event trigger, a Telegram notification is sent to user to notify them on the changes made. 

The following details are included in the Telegram notification:
  * Github event type (E.g. Push, Pull, etc)
  * ID of the commit made
  * Description of the commit made
  * User who triggered the event and made the commit

To incorporate this action in the workflow, there are a number of steps to be taken:
1. Create a Telegram Bot by speaking to the [BotFather](https://t.me/botfather). 
2. Take note of the chat_id and token for the newly created Bot.
3. Update the workflow <b>`.yml`</b> file to incorporate this Telegram notification action The Telegram Bot credentials are essential for this. 
4. Commit changes and await the notification from your Bot.

The following parameters are required:

| Key            | Input                | 
| ---------------|----------------------| 
| <b>`token`</b> | Telegram Bot token   |
| <b>`to`</b>    | Telegram Bot chat_id |


###### <i>Important Note: [Github Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets) is key to this workflow.</i> <br>

**_Telegram Notification:_**<br>
<br>
<img src="images/devops-cicd-bot.png" width="400">
<br>
<br>
## Part IV: Google Cloud Run Deployment Workflow 
For this workflow, the primary steps are:
1. Enable Google Cloud Run and Cloud Build API.
2. Configure Google Authentication (credentials are necessary for a successful deployment).
3. Ensure necessary files are in the Github repository. 
4. Create workflow using Github Actions.
5. Deploy!

Live endpoint for the project: https://devops-cicd-o7v2rv5pfq-uc.a.run.app/
<br>
<br>
## Part V: Workflow Status
To verify the status of the workflow, proceed to [Actions](https://github.com/ericiachan/devops-cicd/actions). 
> * If the workflow is successfully executed, <b>`Success`</b> will be reflected under the <b>`Status`</b> header.<br> 
> * If there are errors in the workflow, <b>`Failure`</b> will be reflected under the <b>`Status`</b> header. 

**_Workflow Status:_**<br>
<br>
<img src ="images/workflow-success.png" width="800">
<br>
<br>
<img src ="images/docker-notify-success.png" width="800">
<br>
<br>
<img src ="images/cloud-deployment-success.png" width="800">


