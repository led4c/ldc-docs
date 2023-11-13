---
aside: true
title: L-JOB
description: L-JOB Dokumentasi.
titleTemplate: :title | Create
---

# Job Creation
Jika kamu ingin menambahkan kustom job sendiri ikuti langkah-langkah di bawah ini:

::: warning FAQ
- **`['jobname']`** adalah ***`nama`*** untuk job atau sidejob.
- ***`nama`*** job harus sesuai dengan konfigurasi lain seperti:
	> ***blips***, ***job***, ***menu***, ***cloakroom***, ***ped*** ***zone***, ***progress***, ***vehicle***, ***webhook***, ***interact***
	>> atau ***`nama`*** harus sesuai dengan database jika Anda berniat menggunakannya untuk pekerjaan.
:::

::: danger IMPORTANT
Kesalahan dalam penulisan atau tanda baca dalam setiap tabel yang Anda buat dapat berdampak signifikan pada kesalahan skrip. Perhatikan dengan seksama!
:::

## Blips
::: tip INFO
Tambahkan tabel Blip yang sesuai dengan pekerjaan yang Anda buat ke `shared/main/blip.lua`.
:::

::: details ADD BLIPS
```lua
['jobname'] = {
	bossArea = {
		name    = 'Name Blip Boss',
		coords  = vector3(-596.3892, -882.9066, 25.7570),
		sprite  = 233,
		display = 4,
		scale   = 1.0,
		colour  = 5,
	},
	workArea = {
		name    = 'Name Blip Take',
		coords  = vector3(-72.2544, 6267.2422, 31.2601),
		sprite  = 233,
		display = 4,
		scale   = 1.0,
		colour  = 5,
	},
	processArea = {
		name    = 'Name Blip Process',
		coords  = vector3(-72.2544, 6267.2422, 31.2601),
		sprite  = 233,
		display = 4,
		scale   = 1.0,
		colour  = 5,
	},
	packingArea = {
		name    = 'Name Blip Packing',
		coords  = vector3(-72.2544, 6267.2422, 31.2601),
		sprite  = 233,
		display = 4,
		scale   = 1.0,
		colour  = 5,
	},
},
```
:::

## Job
::: tip INFO
Tambahkan tabel pekerjaan yang sesuai dengan pekerjaan yang Anda buat ke dalam `shared/main/job.lua`. Lihat bagian `Detail` untuk informasi lebih lanjut.
:::

::: details README
- `label`: `string` 
	> Label job untuk pemberitahuan atau informasi lainnya.
- `enableJob`: `boolean`
	> Jika diatur sebagai `'true'`, harus menggunakan job. Jika diatur sebagai `'false'`, ini adalah sidejob dan tidak memerlukan job utama.
- `enableSkill`: `boolean`
	> Jika diatur sebagai `'true'`, menggunakan skill check. Jika diatur sebagai `'false'`, tidak ada skill check, dan menggunakan skill check **ox_lib** *(hanya untuk pengumpulan)*.
- `skillDifficulty`: `boolean` 
	> Aktif jika ***`enableSkill`*** adalah `true`. Kesulitan skill check dapat ditemukan dalam dokumentasi **ox_lib**.
- `getRandom`: `boolean` 
	> Jika `true`, Anda akan mendapatkan hasil acak. Jika `false`, Anda akan mendapatkan hasil statis (`getStatic`). Jika acak, Anda dapat mengatur hasil minimum dan maksimum dengan `getMin` dan `getMax` *(hanya untuk pengumpulan)*.
- `getMin`: `number`
	> Nilai minimum yang bisa Anda dapatkan jika (***`getRandom`*** = `true`).
- `getMax`: `number` 
	> Nilai maksimum yang bisa Anda dapatkan jika (***`getRandom`*** = `true`).
- `getStatic`: `number`
	> Hasil tetap yang Anda dapatkan jika (***`getRandom`*** = `false`).
- `Item`:
	> - `take`: `string`
		>> Nama item yang akan Anda dapatkan selama *pengumpulan*.
	> - `process`: `string`
		>> Nama item yang akan Anda dapatkan selama *pengolahan*.
	> - `packing`: `string`
		>> Nama item yang akan Anda dapatkan selama *pembungkusan*.
	> - `canCarry`: `number`
		>> *Jangan sentuh jika Anda tidak memahaminya!*
- `selling`
	> - `item`: `string`
		>> Nama item yang akan dijual (misalnya, item_packing).
	> - `price`: `number`
		>> harga jual per 1 item
- `tools`
	> - `enable`: `boolean`
		>> Mengaktifkan atau menonaktifkan bahan item untuk pekerjaan.
	> - `minBroke`: `number`
		>> Nilai kerusakan minimum.
	> - `maxBroke`: `number`
		>> Nilai kerusakan maksimum.
	> - `threshold`: `number`
		>> Batas kerusakan. Jika nilai kerusakan melebihi 'threshold', item akan dihapus.
	> - `process`: `string`
		>> Nama item alat yang diperlukan.
:::

::: details ADD JOB
```lua
['jobname'] = {
	label = 'Job Label',
	enableJob = false,
	enableSkill = false,
	skillDifficulty = {'medium', 'easy', 'easy'},
	getRandom = true,
	getMin = 1,
	getMax = 5,
	getStatic = 1,
	item = {
		take = 'item_taking', 
		process = 'item_process',
		packing = 'item_packing',
		canCarry = 1,
	},
	selling = {
		item = 'item_packing',
		price = 500,
	},
	tools = {
		enable = true,
		minBroke = 50,
		maxBroke = 110,
		threshold = 100,
		process = 'item_process_tools',
	}
},
```
:::

## Menu
::: tip INFO
Tambahkan tabel menu yang sesuai dengan pekerjaan yang Anda buat ke dalam `shared/main/menu.lua`. Lihat bagian `Detail` untuk informasi lebih lanjut.
:::

::: details README
- `label`: `string`
- `description`: `string`
- `icon`: `string`
- `onSelect`:
	> - `sellingItemSidejob('jobname')`
	> - `onDutyClotheSidejob('jobname')`
	> - `offDutyClotheSidejob('jobname')`
	>> `'jobname'` ? [Job Creation](#job-creation)
:::

::: details ADD MENU
```lua
['jobname'] = {
	label = 'Job Bos',
	{
		title = 'Selling Item',
		description = 'Sell packaged Item for $500 per item',
		icon = 'fas fa-money-bill-trend-up',
		onSelect = function()
			sellingItemSidejob('jobname')
		end,
	},
	{
		title = 'Workers Clothes',
		description = 'To start the job & change your clothes',
		icon = 'fas fa-user-check',
		onSelect = function()
			onDutyClotheSidejob('jobname')
		end,
	},
	{
		title = 'Civilian Clothes',
		description = 'To finish the job & change your clothes',
		icon = 'fas fa-user-xmark',
		onSelect = function()
			offDutyClotheSidejob('jobname')
		end,
	},
},
```
:::

## Cloakroom
::: tip INFO
Tambahkan tabel untuk pakaian yang sesuai dengan pekerjaan yang Anda buat ke dalam `shared/main/cloakroom.lua`.
:::

::: details ADD CLOTHES
```lua
['jobname'] = {
	male = {
		['tshirt_1'] = 15,  ['tshirt_2'] = 0,
		['torso_1'] = 43,   ['torso_2'] = 0,
		['decals_1'] = 0,   ['decals_2'] = 0,
		['arms'] = 37,
		['pants_1'] = 8,   ['pants_2'] = 0,
		['shoes_1'] = 3,   ['shoes_2'] = 0,
		['chain_1'] = 0,    ['chain_2'] = 0,
		['helmet_1'] = -1,  ['helmet_2'] = 0,
		['ears_1'] = -1,     ['ears_2'] = 0,
		['bproof_1'] = 0,  ['bproof_2'] = 0
	},
	female = {
		['tshirt_1'] = 15,  ['tshirt_2'] = 0,
		['torso_1'] = 27,   ['torso_2'] = 0,
		['decals_1'] = 0,   ['decals_2'] = 0,
		['arms'] = 46,
		['pants_1'] = 4,   ['pants_2'] = 0,
		['shoes_1'] = 72,   ['shoes_2'] = 0,
		['chain_1'] = -1,    ['chain_2'] = 0,
		['helmet_1'] = -1,  ['helmet_2'] = 0,
		['bproof_1'] = 0,  ['bproof_2'] = 0
	}
},
```
:::

## Ped Zone
::: tip INFO
Tambahkan tabel zona ped yang sesuai dengan pekerjaan yang Anda buat ke dalam `shared/main/ped.lua`. Lihat bagian `Detail` untuk informasi lebih lanjut.
:::

::: tip RADIAL MENU
Untuk menu radial di zona ped, Anda dapat menggunakan ***l-radialmenu*** atau Anda dapat menggunakan ***qb-radialmenu*** jika sudah diubah menjadi ESX, atau Anda dapat menonaktifkannya jika tidak menggunakan menu radial.
:::

::: details README
- `[1]` atau `['id']`: `number` atau `string` 
	> Angka atau string harus ***unik*** untuk setiap zona ped dan akan digunakan untuk ***berinteraksi***.
- `lokasiPed`: `vec3(x, y, z)` 
	> Koordinat ped.
- `namaPed`: `string` 
	> Nama model ped.
- `spawnanPed`: `number`
	> Default adalah `0`, jangan mengubahnya jika Anda tidak memahaminya.
- `disablePed`: `boolean`
	> Aktifkan atau nonaktifkan ped.
- `animation`:
	> - `enable`: `boolean`
		>> Aktifkan atau nonaktifkan animasi ped.
	> - `dict`: `string`
		>> Dict animasi ped.
	> - `name`: `string`
		>> Nama animasi ped.
- `props`:
	> - `enable`: `boolean`
		>> Aktifkan atau nonaktifkan atribut ped.
		> - `list`
			>> - `bone`: `number`
				>>> Props bone.
			>> - `position`: `vec3(x, y, z)`
				>>> Props posisi.
			>> - `rotation`: `vec3(x, y, z)`
				>>> Props rotasi.
- `zone`:
	> Zona ped menggunakan zona ***ox_lib***.
	> - `position`: `vec3(x, y, z)`
		>> Posisi zona.
	> - `size`: `number`
		>> Radius atau size zona.
	> - `debug`: `boolean`
		>> `'true'` atau `'false'`, default adalah `Config.Debug` untuk mengaktifkan debugging zona.
		> - `textui`
			>> Menggunakan ***ox_lib*** text UI.
			>> - `enable`: `boolean`
				>>> `'true'` atau `'false'` untuk mengaktifkan atau menonaktifkan text UI saat memasuki zona.
			>> - `text`: `string`
				>>> Label text UI.
			>> - `icon`: `string`
				>>> Ikon FontAwesome text UI.
		> - `radial`
			>> Menggunakan ***l-radialmenu*** atau Anda dapat menggunakan ***qb-radialmenu*** jika sudah diubah menjadi ESX, atau Anda dapat menonaktifkannya jika tidak menggunakan menu radial.
			>> - `enable`: `boolean`
				>>> `'true'` atau `'false'` untuk mengaktifkan atau menonaktifkan menu radial saat memasuki zona.
			>> - `id`: `string`
				>>> ID menu radial, harus unik dan tidak sama.
			>> - `title`: `string`
				>>> Title menu radial.
			>> - `icon`: `string`
				>>> Ikon menu radial, lihat ikon dalam (file js l-radialmenu/qb-radialmenu).
			>> - `type`: `string`
				>>> `'client'` atau `'command'`
			>> - `event`: `string`
				>>> `'name:event'` untuk trigger.
			>> - `close`: `boolean`
				>>> `'true'` atau `'false'` untuk menutup menu radial saat dipilih.
:::

::: details ADD PED ZONE
```lua
['jobname'] = {
	[1] = {
		lokasiPed = vec3(1168.9788, -291.7307, 69.0218),
		headingPed = 323.3698,
		namaPed = 'ig_molly',
		spawnanPed = 0,
		disablePed = true,
		animation = { 
			enable = true,
			dict = "amb@world_human_drinking@coffee@male@base",
			name = "base"
		},
		props = { 
			enable = true, 
			list = {
				{
					model = "p_amb_brolly_01", 
					bone = 57005,
					position = vec3(0.15, 0.005, 0.0),
					rotation = vec3(87.0, -20.0, 180.0)
				},
			}
		},
		zone = {
			position = vector3(-268.9590, -956.4215, 31.1955),
			size = 5,
			debug = Config.Debug, 
			textui = {
				enable = true, 
				text = 'Text',
				icon = 'circle-user'
			},
			radial = {
				enable = true,
				id = 'job:name:id',
				title = 'Title',
				icon = 'user',
				type = 'client',
				event = 'client:event', 
				close = true,
			}
		}
	},
},
```
:::

## Progress
::: tip INFO
Tambahkan tabel untuk progress yang sesuai dengan pekerjaan yang Anda buat ke dalam `shared/main/progress.lua`. Lihat bagian `Detail` untuk informasi lebih lanjut.
:::

::: details README
Progress menggunakan ***ox_lib***.
- `progressType`: `string`
	> `'bar'` atau `'circle'`
- `durationType`: `string`
	> `'all'` atau `'each'` .
	>> - ***`all`***: Durasi default sesuai dengan pengaturan.
	>> - ***`each`***: Durasi per 1 item (misalnya, 30 item * 500ms = 15s).
	>> - `durationType` hanya digunakan untuk (***pengolahan***) dan (***pembungkusan***).
- `taking` / `processing` / `packing` / `selling` / `outfit`:
	> - `duration`: `number`
		>> - Durasi progress.
		>> - Untuk `processing` dan `packing`, Anda dapat menggunakan `durationType`.
	> - `position`: `string`
		>> `'middle'` atau `'bottom'` position hanya bisa di gunakan jika `progressType` = `'circle'`
	> - `position`: `string`
		>> Label progress.
	> - `useWhileDead`: `boolean`
	> - `canCancel`: `boolean`
	> - `disable`:
		>> - `move`: `boolean`
		>> - `car`: `boolean`
		>> - `combat`: `boolean`
		>> - `mouse`: `boolean`
	> - `anim`:
		>> - `dict`: `string`
		>> - `clip`: `string`
	> - `prop`:
		>> - `model`: `string`
		>> - `bone`: `number`
		>> - `pos`: `vec3(x, y, z)`
		>> - `rot`: `vec3(x, y, z)`
:::

::: details ADD PROGRESS
```lua
['jobname'] = {
	progressType = 'bar',
	durationType = 'each',
	taking = {
		duration = 6000,
		position = 'middle',
		label = 'Taking',
		useWhileDead = false,
		canCancel = true,
		disable = {
			move = true,
			car = true,
			combat = true,
			mouse = true,
		},
		anim = {
			dict = 'creatures@rottweiler@tricks@',
			clip = 'petting_franklin',
		},
	},
	processing = {
		duration = 500,
		position = 'middle',
		label = 'Processing',
		useWhileDead = false,
		canCancel = true,
		disable = {
			move = true,
			car = true,
			combat = true,
			mouse = true,
		},
		anim = {
			dict = 'mini@sprunk',
			clip = 'plyr_buy_drink_pt1',
		},
	},
	packing = {
		duration = 500,
		position = 'middle',
		label = 'Packing',
		useWhileDead = false,
		canCancel = true,
		disable = {
			move = true,
			car = true,
			combat = true,
			mouse = true,
		},
		anim = {
			dict = 'anim@heists@ornate_bank@grab_cash_heels',
			clip = 'grab',
		},
		prop = {
			model = `prop_cs_clothes_box`,
			bone = 57005,
			pos = vec3(0.13, 0.0, -0.16),
			rot = vec3(250.0, -30.0, 0.0)
		},
	},
	selling = {
		duration = 500,
		position = 'middle',
		label = 'Selling',
		useWhileDead = false,
		canCancel = true,
		disable = {
			move = true,
			car = true,
			combat = true,
			mouse = true,
		},
		anim = {
			dict = 'anim@heists@box_carry@',
			clip = 'idle'
		},
		prop = {
			model = `ex_mp_h_acc_box_trinket_01`,
			bone = 60309,
			pos = vec3(0.025, -0.10, 0.255),
			rot = vec3(-54.0, 290.0, 0.0)
		},
	},
	outfit = {
		duration = 4500,
		position = 'middle',
		label = 'Changing worker\'s clothes',
		useWhileDead = false,
		canCancel = true,
		disable = {
			move = true,
			car = true,
			combat = true,
			mouse = true,
		},
		anim = {
			dict = 'missmic4',
			clip = 'michael_tux_fidget',
		},
	},
},
```
:::

## Vehicle
::: tip INFO
Tambahkan tabel untuk kendaraan yang sesuai dengan pekerjaan yang Anda buat ke dalam `shared/main/vehicle.lua`. Lihat bagian `Detail` untuk informasi lebih lanjut.
:::

::: details README
- `enable`: `boolean`
	> `true` atau `false` untuk mengaktifkan atau menonaktifkan penyewaan kendaraan untuk pekerjaan tersebut.
- `price`: `number`
	> Misalnya, `1000` adalah harga sewa kendaraan. Tetapkan ke `0` untuk gratis.
- `model`: `string`
	> Misalnya, `elegy` adalah nama model kendaraan yang akan di-spawn.
- `plate`: `string`
	> Gunakan `nil` untuk pelat acak, atau gunakan sesuatu seperti `ABC` untuk pelat kustom dengan format `A 12 ABC`.
- `coords`: `{x= x, y= y, z= z}`
	> Koordinat untuk spawn kendaraan, misalnya: `{x = 1135.1447, y = -292.9640, z = 68.3466}`.
- `heading`: `number`
	> Heading untuk spawn kendaraan.
- `zone`:
	> - `position`: `vector3(x, y, z)`
		>> Koordinat zona.
	> - `size`: `vec3(x, y, z)`
		>> Ukuran zona.
	> - `rotation`: `number`
		>> Heading zona.
	> - `debug`: `boolean`
		>> `'true'` atau `'false'`, default adalah `Config.Debug` untuk mengaktifkan debugging zona.
	> - `labelTarget`: `string`
		>> Label target untuk berinteraksi agar dapat mengembalikan kendaraan sewa.
	>> - `textui`:
		>>> - `enable`: `boolean`
			>>>> `true` atau `false` untuk mengaktifkan atau menonaktifkan UI teks saat memasuki zona pekerjaan sewa.
		>>> - `text`: `string`
			>>>> Label Text UI.
		>>> - `icon`: `string`
			>>>> Icon Text UI.
:::

::: details ADD VEHICLE
```lua
['jobname'] = {
	enable = true,
	price = 1000,
	model = 'youga',
	plate = 'SSU',
	coords = {x = 1135.1447, y = -292.9640, z = 68.3466},
	heading = 278.8804,
	zone = {
		position = vector3(1135.1447, -292.9640, 68.3466),
		size = vec3(10, 10, 5),
		rotation = 278.8804,
		debug = Config.Debug,
		labelTarget = 'Return the vehicle',
		textui = {
			enable = true,
			text = 'VEHICLE JOBNAME AREA',
			icon = 'car'
		},
	} 
},
```
:::

## Webhook
::: tip INFO
Tambahkan tabel untuk webhook yang sesuai dengan pekerjaan yang Anda buat ke dalam `shared/main/webhook.lua`. Lihat bagian `Detail` untuk informasi lebih lanjut.
:::

::: details README
- `taking` / `processing` / `packing` / `selling`
- `enable`: `boolean`
	> `true` atau `false` untuk mengaktifkan atau menonaktifkan webhook untuk pekerjaan tersebut.
- `link`: `string`
	> `'link'` Tautan webhook.
- `avatar`: `string`
	> `'link'` Tautan avatar webhook, dapat menggunakan Imgur atau layanan hosting gambar lainnya.
- `name`: `string`
	> Nama webhook.
- `title`: `string`
	> Judul webhook.
- `thumbnail`: `string`
	> `'link'` Tautan gambar mini webhook, dapat menggunakan Imgur atau layanan hosting gambar lainnya.
:::

::: details ADD WEBHOOK
```lua
['jobname'] = {
	taking = {
		enable = true,
		link = 'link-here',
		avatar = 'link-here',
		name = 'WEBHOOK JOBNAME',
		title = 'TAKING',
		thumbnail = 'link-here',
	},
	processing = {
		enable = true,
		link = 'link-here',
		avatar = 'link-here',
		name = 'WEBHOOK JOBNAME',
		title = 'PROCESS',
		thumbnail = 'link-here',
	},
	packing = {
		enable = true,
		link = 'link-here',
		avatar = 'link-here',
		name = 'WEBHOOK JOBNAME',
		title = 'PACKING',
		thumbnail = 'link-here',
	},
	selling = {
		enable = true,
		link = 'link-here',
		avatar = 'link-here',
		name = 'WEBHOOK JOBNAME',
		title = 'SELLING',
		thumbnail = 'link-here',
	},
},
```
:::

## Items
::: tip INFO
Tambahkan tabel untuk item yang sesuai dengan pekerjaan yang Anda buat ke dalam `ox_inventory/data/items.lua`. Lihat bagian `Detail` untuk informasi lebih lanjut.
:::

::: details README
Pastikan item yang Anda tambahkan sesuai dengan item pekerjaan yang Anda buat di [Jobs](#job), seperti 3 item: `item_taking`, `item_process`, dan `item_packing`.
:::

::: details ADD OX_INVENTORY
```lua
['item_taking'] = {
	label = 'Item taking',
	weight = 600,
	stack = true,
	close = true,
	description = 'To be processed'
},
['item_process'] = {
	label = 'Item Process',
	weight = 400,
	stack = true,
	close = true,
	description = 'To be packaged and processed'
},
['item_packing'] = {
	label = 'Item Packing',
	weight = 200,
	stack = true,
	close = true,
	description = 'For sale'
},
```
:::

## Interaction
::: tip INFO
Buat file baru di direktori `shared/interaction/` dengan nama apa pun yang sesuai dengan pekerjaan yang Anda buat, lalu tambahkan ***script interaksi*** ke file yang telah Anda buat. Lihat bagian `README INTERACTION` untuk informasi lebih lanjut.
:::

::: details README INTERACTION
Di dalam file, terdapat 4 interaksi untuk `BOS` (bos) menggunakan ped, dan `taking`, `process`, `packing` menggunakan zona bola.
> Anda dapat menyesuaikan `jobname` agar sesuai dengan nama pekerjaan yang Anda buat.
:::

::: details README BOS
- `BOS`
	> - `AddEventHandler('boss:jobname', function()` 
		>> Event untuk membuka menu bos radial.
	> - `target:addModel(Ped.PedZone['jobname']['id_ped_zone'].namaPed` 
		>> Untuk ***`id_ped_zone`***, gunakan ID zona ped pekerjaan yang telah Anda buat di [Zona Ped](#zona-ped).
	> - `openSidejobMenu('jobname')` 
		>> Ganti ***`jobname`*** dengan nama pekerjaan yang Anda buat.
:::

::: details README TAKING
- `TAKING`
	> - `AddEventHandler('taking:jobname', function()` 
		>> Event untuk menu radial pekerjaan mengambil item.
	> - `coords`: `vec3(x, y,z)`
		>> Koordinat untuk zona pengambilan.
	> - `radius`: `number`
		>> Radius untuk zona pengambilan.
	> - `debug`: `boolean`
		>> Debug zona pengambilan, `true` atau `false`.
	> - `takingItemSidejob('jobname')`
		>> Ganti ***`jobname`*** dengan nama pekerjaan yang Anda buat.
		>>> - `onEnter`
			>>>> - `textUIAreaSidejob(type, text, icon)`
				>>>>> - `type`: `string` 
					>>>>>> `show` atau `hide` untuk ***onEnter*** zona gunakan `show`
				>>>>> - `text`: `string` 
					>>>>>> Label text UI.
				>>>>> - `icon`: `string` 
					>>>>>> Icon text UI.
			>>>> - `conditionalRadialMenuAreaSidejob(action, id, title, icon, eventType, event, shouldClose)`
				>>>>> - `action`: `string` 
					>>>>>> Gunakan `show` atau `hide` untuk zona ***onEnter***, gunakan `show`.
				>>>>> - `id`: `string` 
					>>>>>> Contohnya, `'taking:jobname'`. ID harus unik karena akan digunakan untuk ***onExit***.
				>>>>> - `title`: `string` 
					>>>>>> Label menu radial.
				>>>>> - `icon`: `string` 
					>>>>>> Ikon menu radial.
				>>>>> - `eventType`: `string` 
					>>>>>> `event` atau `command`
				>>>>> - `event`: `string` 
					>>>>>> TriggerEvent, misalnya, `'taking:jobname'` untuk mengambil menggunakan menu radial.
				>>>>> - `shouldClose`: `boolean`
					>>>>>> `true` atau `false` untuk menutup menu radial setelah diklik.
		>>> - `onExit`
			>>>> - `textUIAreaSidejob(type)`
				>>>>> - Untuk ***onExit***, Anda hanya perlu `type`.
				>>>>> - `type`: `string`
					>>>>>> Gunakan `show` atau `hide` untuk zona ***onExit***, gunakan `hide`.
			>>>> - `conditionalRadialMenuAreaSidejob(action, id)`
				>>>>> - Untuk ***onExit***, Anda hanya perlu `action` dan `id` sesuai dengan ID yang Anda buat di ***onEnter***.
				>>>>> - `action`: `string` 
					>>>>>> Gunakan `show` atau `hide` untuk zona ***onExit***, gunakan `hide`.
				>>>>> - `id`: `string` 
					>>>>>> Contohnya, `'taking:jobname'`, ID yang Anda buat selama ***onEnter***.
:::

::: details README PROCESS
- `PROCESS`
	> - `AddEventHandler('proses:jobname', function()` 
		>> Event untuk menu radial pekerjaan proses item.
	> - `coords`: `vec3(x, y,z)`
		>> Koordinat untuk zona proses.
	> - `radius`: `number`
		>> Radius untuk zona proses.
	> - `debug`: `boolean`
		>> Debug zona proses, `true` atau `false`.
	> - `processItemSidejob('jobname')`
		>> Ganti ***`jobname`*** dengan nama pekerjaan yang Anda buat.
		>>> - `onEnter`
			>>>> - `textUIAreaSidejob(type, text, icon)`
				>>>>> - `type`: `string` 
					>>>>>> `show` atau `hide` untuk ***onEnter*** zona gunakan `show`
				>>>>> - `text`: `string` 
					>>>>>> Label text UI.
				>>>>> - `icon`: `string` 
					>>>>>> Icon text UI.
			>>>> - `conditionalRadialMenuAreaSidejob(action, id, title, icon, eventType, event, shouldClose)`
				>>>>> - `action`: `string` 
					>>>>>> Gunakan `show` atau `hide` untuk zona ***onEnter***, gunakan `show`.
				>>>>> - `id`: `string` 
					>>>>>> Contohnya, `'proses:jobname'`. ID harus unik karena akan digunakan untuk ***onExit***.
				>>>>> - `title`: `string` 
					>>>>>> Label menu radial.
				>>>>> - `icon`: `string` 
					>>>>>> Ikon menu radial.
				>>>>> - `eventType`: `string` 
					>>>>>> `event` atau `command`
				>>>>> - `event`: `string` 
					>>>>>> TriggerEvent, misalnya, `'proses:jobname'` untuk mengambil menggunakan menu radial.
				>>>>> - `shouldClose`: `boolean`
					>>>>>> `true` atau `false` untuk menutup menu radial setelah diklik.
		>>> - `onExit`
			>>>> - `textUIAreaSidejob(type)`
				>>>>> - Untuk ***onExit***, Anda hanya perlu `type`.
				>>>>> - `type`: `string`
					>>>>>> Gunakan `show` atau `hide` untuk zona ***onExit***, gunakan `hide`.
			>>>> - `conditionalRadialMenuAreaSidejob(action, id)`
				>>>>> - Untuk ***onExit***, Anda hanya perlu `action` dan `id` sesuai dengan ID yang Anda buat di ***onEnter***.
				>>>>> - `action`: `string` 
					>>>>>> Gunakan `show` atau `hide` untuk zona ***onExit***, gunakan `hide`.
				>>>>> - `id`: `string` 
					>>>>>> Contohnya, `'proses:jobname'`, ID yang Anda buat selama ***onEnter***.
:::

::: details README PACKING
- `PACKING`
	> - `AddEventHandler('packing:jobname', function()` 
		>> Event untuk menu radial pekerjaan packing item.
	> - `coords`: `vec3(x, y,z)`
		>> Koordinat untuk zona packing.
	> - `radius`: `number`
		>> Radius untuk zona packing.
	> - `debug`: `boolean`
		>> Debug zona packing, `true` atau `false`.
	> - `packingItemSidejob('jobname')`
		>> Ganti ***`jobname`*** dengan nama pekerjaan yang Anda buat.
		>>> - `onEnter`
			>>>> - `textUIAreaSidejob(type, text, icon)`
				>>>>> - `type`: `string` 
					>>>>>> `show` atau `hide` untuk ***onEnter*** zona gunakan `show`
				>>>>> - `text`: `string` 
					>>>>>> Label text UI.
				>>>>> - `icon`: `string` 
					>>>>>> Icon text UI.
			>>>> - `conditionalRadialMenuAreaSidejob(action, id, title, icon, eventType, event, shouldClose)`
				>>>>> - `action`: `string` 
					>>>>>> Gunakan `show` atau `hide` untuk zona ***onEnter***, gunakan `show`.
				>>>>> - `id`: `string` 
					>>>>>> Contohnya, `'packing:jobname'`. ID harus unik karena akan digunakan untuk ***onExit***.
				>>>>> - `title`: `string` 
					>>>>>> Label menu radial.
				>>>>> - `icon`: `string` 
					>>>>>> Ikon menu radial.
				>>>>> - `eventType`: `string` 
					>>>>>> `event` atau `command`
				>>>>> - `event`: `string` 
					>>>>>> TriggerEvent, misalnya, `'packing:jobname'` untuk mengambil menggunakan menu radial.
				>>>>> - `shouldClose`: `boolean`
					>>>>>> `true` atau `false` untuk menutup menu radial setelah diklik.
		>>> - `onExit`
			>>>> - `textUIAreaSidejob(type)`
				>>>>> - Untuk ***onExit***, Anda hanya perlu `type`.
				>>>>> - `type`: `string`
					>>>>>> Gunakan `show` atau `hide` untuk zona ***onExit***, gunakan `hide`.
			>>>> - `conditionalRadialMenuAreaSidejob(action, id)`
				>>>>> - Untuk ***onExit***, Anda hanya perlu `action` dan `id` sesuai dengan ID yang Anda buat di ***onEnter***.
				>>>>> - `action`: `string` 
					>>>>>> Gunakan `show` atau `hide` untuk zona ***onExit***, gunakan `hide`.
				>>>>> - `id`: `string` 
					>>>>>> Contohnya, `'packing:jobname'`, ID yang Anda buat selama ***onEnter***.
:::

::: details SCRIPT INTERACTION
```lua
local target = exports.ox_target
local drawZones = Config.Debug

-- BOS --
AddEventHandler('boss:jobname', function()
    openSidejobMenu('jobname')
end)
target:addModel(Ped.PedZone['jobname']['boss'].namaPed, {
    {
        name = 'boss:jobname',
        icon = 'fas fa-person-chalkboard',
        label = 'Talk To Bos',
        onSelect = function()
            openSidejobMenu('jobname')
        end,
        canInteract = function(entity, distance, coords, name, bone)
            for k, zones in pairs(Ped.PedZone) do
                for key, data in pairs(zones) do
                    if #(coords - data.zone.position) < 2.0 then
                        if distance < 2.0 then
                            return cantInteractSidejob()
                        end 
                    end
                end
            end
        end
    },
})

-- TAKING --
AddEventHandler('taking:jobname', function()
    takingItemSidejob('jobname')
end)
target:addSphereZone({
    coords = vec3(-64.8250, 6247.4692, 31.0901),
    radius = 3.5,
    debug = drawZones,
    options = {
        {
            name = 'taking:jobname',
            icon = 'fas fa-hand',
            label = 'Taking',
            distance = 2,
            onSelect = function()
                takingItemSidejob('jobname')
            end,
            canInteract = function()
                return cantInteractSidejob()
            end
        }
    },
    onEnter = function()
        textUIAreaSidejob('show', 'Taking area', 'eye')
        conditionalRadialMenuAreaSidejob('show', 'taking:jobname', 'Taking', 'hand', 'client', 'taking:jobname', true)
    end,
    onExit = function()
        textUIAreaSidejob('hide')
        conditionalRadialMenuAreaSidejob('hide', 'taking:jobname')
    end,
})

-- PROCESS --
AddEventHandler('proses:jobname', function()
    processItemSidejob('jobname')
end)
target:addSphereZone({
    coords = vec3(-78.9007, 6228.8848, 31.9391),
    radius = 2,
    debug = drawZones,
    options = {
        {
            name = 'proses:jobname',
            icon = 'fas fa-hands-holding',
            label = 'Processing',
            distance = 2,
            onSelect = function()
                processItemSidejob('jobname')
            end,
            canInteract = function()
                return cantInteractSidejob()
            end
        }
    },
    onEnter = function()
        textUIAreaSidejob('show', 'Processing area', 'eye')
        conditionalRadialMenuAreaSidejob('show', 'proses:jobname', 'Process', 'hand', 'client', 'proses:jobname', true)
    end,
    onExit = function()
        textUIAreaSidejob('hide')
        conditionalRadialMenuAreaSidejob('hide', 'proses:jobname')
    end,
})

-- PACKING --
AddEventHandler('packing:jobname', function()
    packingItemSidejob('jobname')
end)
target:addSphereZone({
    coords = vec3(-103.0455, 6209.5024, 30.9928),
    radius = 3.5,
    debug = drawZones,
    options = {
        {
            name = 'packing:jobname',
            icon = 'fas fa-boxes-packing',
            label = 'Package',
            distance = 2,
            onSelect = function()
                packingItemSidejob('jobname')
            end,
            canInteract = function()
                return cantInteractSidejob()
            end
        }
    },
    onEnter = function()
        textUIAreaSidejob('show', 'Packaging area', 'eye')
        conditionalRadialMenuAreaSidejob('show', 'packing:jobname', 'Packing', 'hand', 'client', 'packing:jobname', true)
    end,
    onExit = function()
        textUIAreaSidejob('hide')
        conditionalRadialMenuAreaSidejob('hide', 'packing:jobname')
    end,
})
```
:::