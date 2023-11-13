---
aside: true
title: L-JOB
description: L-JOB Documentation.
titleTemplate: :title | Function
---

# Client Exports
This set of Lua exports provides functionality for managing side jobs and duty status in a game or application. These exports allow you to control and monitor the busy and duty status of side jobs. Below are the available functions and their descriptions:

::: details BUSY
## Set Busy Side Job
> Set the busy status for a side job.
```lua 
exports["l-job"]:setBusySidejob()
```

## Check Busy Side Job
> Check whether the side job is currently marked as busy.
```lua 
exports["l-job"]:onBusySidejob()
```

## Reset Busy Side Job
> Reset the busy status for a side job.
```lua 
exports["l-job"]:resetBusySidejob()
```
:::

::: details DUTY
## Set Side Job Duty
> Set the duty status for a specific side job.
```lua 
exports["l-job"]:setSidejobDuty(jobName, boolean)
```

## Check If Side Job Duty
> Check if a specific side job is currently on duty or not, based on the provided job name.
```lua 
exports["l-job"]:isSidejobDuty(jobName)
```

## Check If Any Side Job Duty
> Check if you are on duty for any side job.
```lua 
exports["l-job"]:isAnySidejobOnDuty()
```

## Check Current Side Job Duty
> Check the current side job duty status.
```lua 
exports["l-job"]:getCurrentSidejobDuty()
```

## Side Job On Duty
> Start duty for a specific side job.
```lua 
exports["l-job"]:toggleSidejobDutyOn(jobName)
```

## Side Job Off Duty
> Stop duty for a specific side job.
```lua 
exports["l-job"]:toggleSidejobDutyOff(jobName)
```

## Off Duty Disconnect Server
> Automatically switch to off-duty mode if the player disconnects.
```lua 
exports["l-job"]:dutySidejobDisconnect()
```
:::