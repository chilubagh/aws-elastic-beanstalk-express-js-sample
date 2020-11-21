Overview

In this tutorial, I created a continuous delivery pipeline for a simple web application. I used github to store the  source code. Then learnt how to create a continuous delivery pipeline that  automatically deploys a web application whenever source code is updated.

What You Will Learn
This tutorial will walked me through the steps to create the continuous delivery pipeline discussed above. I learnt to:

Set up a GitHub repository for the application code
Created an AWS Elastic Beanstalk environment to deploy the application
Configured AWS CodeBuild to build the source code from GitHub
Used AWS CodePipeline to set up the continuous delivery pipeline with source, build, and deploy stages


Application Architecture

The diagram below provides a visual representation of the services used in this tutorial and how they are connected. This application used GitHub, AWS Elastic Beanstalk, AWS CodeBuild, and AWS CodePipeline as pictured below.

As we go through the tutorial, we will discuss the services in detail and point to resources that will help you get up to speed with them.


