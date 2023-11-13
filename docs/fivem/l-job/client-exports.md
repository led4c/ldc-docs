---
aside: true
title: L-JOB
description: L-JOB Dokumentasi.
titleTemplate: :title | Function
---

# Client Exports
Kumpulan ekspor Lua ini menyediakan fungsionalitas untuk mengelola pekerjaan sampingan dan status tugas dalam permainan atau aplikasi. Ekspor ini memungkinkan Anda mengendalikan dan memantau status sibuk dan tugas pekerjaan sampingan. Berikut adalah fungsi-fungsi yang tersedia beserta deskripsi mereka:

::: details BUSY
## Set Busy Side Job
> Mengatur status sibuk untuk pekerjaan sampingan.
```lua 
exports["l-job"]:setBusySidejob()
```

## Check Busy Side Job
> Memeriksa apakah pekerjaan sampingan saat ini ditandai sebagai sibuk.
```lua 
exports["l-job"]:onBusySidejob()
```

## Reset Busy Side Job
> Mengatur ulang status sibuk untuk pekerjaan sampingan.
```lua 
exports["l-job"]:resetBusySidejob()
```
:::

::: details DUTY
## Set Side Job Duty
> Mengatur status tugas untuk pekerjaan sampingan tertentu.
```lua 
exports["l-job"]:setSidejobDuty(jobName, boolean)
```

## Check If Side Job Duty
> Memeriksa apakah pekerjaan sampingan tertentu saat ini sedang tugas atau tidak, berdasarkan nama pekerjaan yang diberikan.
```lua 
exports["l-job"]:isSidejobDuty(jobName)
```

## Check If Any Side Job Duty
> Memeriksa apakah Anda sedang bertugas untuk pekerjaan sampingan apa pun.
```lua 
exports["l-job"]:isAnySidejobOnDuty()
```

## Check Current Side Job Duty
> Memeriksa status tugas pekerjaan sampingan saat ini.
```lua 
exports["l-job"]:getCurrentSidejobDuty()
```

## Side Job On Duty
> Memulai tugas untuk pekerjaan sampingan tertentu.
```lua 
exports["l-job"]:toggleSidejobDutyOn(jobName)
```

## Side Job Off Duty
> Menghentikan tugas untuk pekerjaan sampingan tertentu.
```lua 
exports["l-job"]:toggleSidejobDutyOff(jobName)
```

## Off Duty Disconnect Server
> Beralih otomatis ke mode off-duty jika pemain terputus.
```lua 
exports["l-job"]:dutySidejobDisconnect()
```
:::