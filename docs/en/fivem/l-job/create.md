---
aside: true
title: L-JOB
description: L-JOB Documentation.
titleTemplate: :title | Create
---

# Job Creation
If you want to create your custom job, follow the steps below:

::: warning FAQ
- **`['jobname']`** is the ***`name`*** for the job or side job.
- The ***`name`*** of the job must match the other configurations such as:
	> ***blips***, ***job***, ***menu***, ***cloakroom***, ***ped*** ***zone***, ***progress***, ***vehicle***, ***webhook***, ***interact***
	>> or the ***`name`*** must match the database if you intend to use it for the job.
:::

::: danger IMPORTANT
Mistakes in writing or punctuation in every table you create can significantly impact script errors. Pay close attention!
:::

## Blips
::: tip INFO
Add the Blip table corresponding to the job you're creating to the `shared/main/blip.lua`.
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
Add a job table that corresponds to the job you're creating into `shared/main/job.lua` See the `Details` section for more information.
:::

::: details README
- `label`: `string` 
	> Job label for notifications or other information.
- `enableJob`: `boolean`
	> If set to `'true'`, it's required to have the job. If set to `'false'`, it's a side job and doesn't require the main job.
- `enableSkill`: `boolean` 
	> If set to `'true'`, it involves a skill check. If set to `'false'`, there's no skill check, and it uses the **ox_lib** skill check *(only for collection)*.
- `skillDifficulty`: `boolean` 
	> Active if ***`enableSkill`*** is `true`. Skill check difficulty can be found in the **ox_lib** documentation.
- `getRandom`: `boolean` 
	> If `true`, you get a random outcome. If `false`, you get a static outcome (`getStatic`). If random, you can set the minimum and maximum results with `getMin` and `getMax` *(only for collection)*.
- `getMin`: `number`
	> The minimum value you can get if (***`getRandom`*** = `true`).
- `getMax`: `number` 
	> The maximum value you can get if (***`getRandom`*** = `true`).
- `getStatic`: `number`
	> The fixed outcome you get if (***`getRandom`*** = `false`).
- `Item`:
	> - `take`: `string`
		>> The name of the item you'll get during *collection*.
	> - `process`: `string`
		>> The name of the item you'll get during *processing*.
	> - `packing`: `string`
		>> The name of the item you'll get during *packing*.
	> - `canCarry`: `number`
		>> *Don't touch if you don't understand!*
- `selling`
	> - `item`: `string`
		>> The name of the item to be sold (e.g., item_packing).
	> - `price`: `number`
		>> Selling price per 1 item.
- `tools`
	> - `enable`: `boolean`
		>> Enable or disable the item material for the job.
	> - `minBroke`: `number`
		>> Minimum damage value.
	> - `maxBroke`: `number`
		>> Maximum damage value.
	> - `threshold`: `number`
		>> Damage limit. If the damage value exceeds the 'threshold', it will be deleted.
	> - `process`: `string`
		>> Item name of the tools required.
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
Add a menu table that corresponds to the job you're creating into `shared/main/menu.lua`. See the `Details` section for more information.
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
Add a table for clothing that corresponds to the job you're creating into `shared/main/cloakroom.lua`.
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
Add a table for a ped zone that corresponds to the job you're creating into `shared/main/ped.lua`. See the `Details` section for more information.
:::

::: tip RADIAL MENU
For the radial menu in the ped zone, you can use ***l-radialmenu*** or you can use ***qb-radialmenu*** if it has been converted to ESX, or you can disable it if not using a radial menu.
:::

::: details README
- `[1]` atau `['id']`: `number` atau `string` 
	> The number or string must be ***unique*** for each ped zone and will be used for ***interact***.
- `lokasiPed`: `vec3(x, y, z)` 
	> Ped's coordinates.
- `namaPed`: `string` 
	> Ped model name.
- `spawnanPed`: `number`
	> Default is `0`, do not change if you don't understand.
- `disablePed`: `boolean`
	> Enable or disable the ped.
- `animation`:
	> - `enable`: `boolean`
		>> Enable or disable ped animations.
	> - `dict`: `string`
		>> Ped animation dictionary.
	> - `name`: `string`
		>> Ped animation name.
- `props`:
	> - `enable`: `boolean`
		>> Enable or disable ped props.
		> - `list`
			>> - `bone`: `number`
				>>> Props bone.
			>> - `position`: `vec3(x, y, z)`
				>>> Props position.
			>> - `rotation`: `vec3(x, y, z)`
				>>> Props rotation.
- `zone`:
	> Ped zones using ***ox_lib*** zones.
	> - `position`: `vec3(x, y, z)`
		>> Zone position.
	> - `size`: `number`
		>> Zone radius or size.
	> - `debug`: `boolean`
		>> `'true'` or `'false'`, default is `Config.Debug` to enable zone debugging.
		> - `textui`
			>> Using ***ox_lib*** text UI.
			>> - `enable`: `boolean`
				>>> `'true'` or `'false'` to enable or disable text UI when entering the zone.
			>> - `text`: `string`
				>>> Text UI label.
			>> - `icon`: `string`
				>>> Text UI FontAwesome icon.
		> - `radial`
			>> Using ***l-radialmenu*** or you can use ***qb-radialmenu*** if it has been converted to ESX, or you can disable it if not using a radial menu.
			>> - `enable`: `boolean`
				>>> `'true'` or `'false'` to enable or disable the radial menu when entering the zone.
			>> - `id`: `string`
				>>> Radial menu ID, must be unique and not the same.
			>> - `title`: `string`
				>>> Radial menu title.
			>> - `icon`: `string`
				>>> Radial menu icon, see the icon in (l-radialmenu/qb-radialmenu js file).
			>> - `type`: `string`
				>>> `'client'` or `'command'`.
			>> - `event`: `string`
				>>> `'name:event'` to trigger.
			>> - `close`: `boolean`
				>>> `'true'` or `'false'` to close the radial menu on select.
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
Add a table for progress that corresponds to the job you're creating into `shared/main/progress.lua`. See the `Details` section for more information.
:::

::: details README
Progress uses ***ox_lib*** progress.
- `progressType`: `string`
	> `'bar'` or `'circle'`
- `durationType`: `string`
	> `'all'` or `'each'`.
	>> - ***`all`***: Default duration according to settings.
	>> - ***`each`***: Duration per 1 item (e.g., 30 items * 500ms = 15s).
	>> - `durationType` is only for (***processing***) and (***packing***).
- `taking` / `processing` / `packing` / `selling` / `outfit`:
	> - `duration`: `number`
		>> - Progress duration.
		>> - For `processing` & `packing`, you can use `durationType`.
	> - `position`: `string`
		>> `'middle'` or `'bottom'`. Position can only be used if `progressType` is `'circle'`.
	> - `position`: `string`
		>> Progress label.
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
Add a table for vehicles that corresponds to the job you're creating into `shared/main/vehicle.lua`. See the `Details` section for more information.
:::

::: details README
- `enable`: `boolean`
	> `true` or `false` to enable or disable vehicle rental for that job.
- `price`: `number`
	> For example, `1000` is the vehicle rental price. Set to `0` for free.
- `model`: `string`
	> For example, `elegy` is the name of the vehicle model to spawn.
- `plate`: `string`
	> Use `nil` for a random plate, or use something like `ABC` for a custom plate with the format `A 12 ABC`.
- `coords`: `{x= x, y= y, z= z}`
	> Coordinates for vehicle spawn, for example: `{x = 1135.1447, y = -292.9640, z = 68.3466}`.
- `heading`: `number`
	> Heading for vehicle spawn.
- `zone`:
	> - `position`: `vector3(x, y, z)`
		>> Zone coordinates.
	> - `size`: `vec3(x, y, z)`
		>> Zone size.
	> - `rotation`: `number`
		>> Zone heading.
	> - `debug`: `boolean`
		>> `'true'` or `'false'`, default is `Config.Debug` to enable zone debugging.
	> - `labelTarget`: `string`
		>> Label target for interact to return the rental vehicle.
	>> - `textui`:
		>>> - `enable`: `boolean`
			>>>> `true` or `false` to enable or disable text UI when entering the rental job zone.
		>>> - `text`: `string`
			>>>> Text UI label.
		>>> - `icon`: `string`
			>>>> Text UI icon.
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
Add a table for webhooks that corresponds to the job you're creating into `shared/main/webhook.lua`. See the `Details` section for more information.
:::

::: details README
- `taking` / `processing` / `packing` / `selling`
- `enable`: `boolean`
	> `true` or `false` to enable or disable the webhook for that job.
- `link`: `string`
	> `'link'` Webhook link.
- `avatar`: `string`
	> `'link'` Webhook avatar link, can use Imgur or other image hosting services.
- `name`: `string`
	> Webhook name.
- `title`: `string`
	> Webhook title.
- `thumbnail`: `string`
	> `'link'` Webhook thumbnail link, can use Imgur or other image hosting services.
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
Add a table for items that correspond to the job you're creating into `ox_inventory/data/items.lua`. See the `Details` section for more information.
:::

::: details README
Make sure the items you add match the job items you create in [Jobs](#job), such as the 3 items: `item_taking`, `item_process`, and `item_packing`.
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
Create a new file in the `shared/interaction/` directory with any name that matches the job you're creating, then add the ***interaction script*** to the file you've created. See the `README INTERACTION` section for more information.
:::

::: details README INTERACTION
Inside the file, there are 4 interactions for the `BOS` (boss) using a ped, and `taking`, `processing`, `packing` using a sphere zone.
> You can adjust `jobname` to match the name of the job you're creating.
:::

::: details README BOS
- `BOS`
	> - `AddEventHandler('boss:jobname', function()` 
		>> Event to open the boss radial menu.
	> - `target:addModel(Ped.PedZone['jobname']['id_ped_zone'].namaPed` 
		>> For ***`id_ped_zone`***, use the ID of the job's ped zone you've created in [Ped Zone](#ped-zone).
	> - `openSidejobMenu('jobname')` 
		>> Replace ***`jobname`*** with the name of the job you're creating.
:::

::: details README TAKING
- `TAKING`
	> - `AddEventHandler('taking:jobname', function()` 
		>> Event for the job's radial menu to take items.
	> - `coords`: `vec3(x, y,z)`
		>> Coordinates for the taking point.
	> - `radius`: `number`
		>> Radius for the taking point.
	> - `debug`: `boolean`
		>> Debug the taking point, `true` or `false`.
	> - `takingItemSidejob('jobname')`
		>> Replace ***`jobname`*** with the name of the job you're creating.
		>>> - `onEnter`
			>>>> - `textUIAreaSidejob(type, text, icon)`
				>>>>> - `type`: `string` 
					>>>>>> Use `show` or `hide` for ***onEnter*** zone, use `show`.
				>>>>> - `text`: `string` 
					>>>>>> Text UI label.
				>>>>> - `icon`: `string` 
					>>>>>> Text UI icon.
			>>>> - `conditionalRadialMenuAreaSidejob(action, id, title, icon, eventType, event, shouldClose)`
				>>>>> - `action`: `string` 
					>>>>>> Use `show` or `hide` for ***onEnter*** zone, use `show`.
				>>>>> - `id`: `string` 
					>>>>>> For example, `'taking:jobname'`. The ID must be unique because it will be used for ***onExit***.
				>>>>> - `title`: `string` 
					>>>>>> Radial menu label.
				>>>>> - `icon`: `string` 
					>>>>>> Radial menu icon.
				>>>>> - `eventType`: `string` 
					>>>>>> `event` or `command`.
				>>>>> - `event`: `string` 
					>>>>>> Trigger event, for example, `'taking:jobname'` for taking using the radial menu.
				>>>>> - `shouldClose`: `boolean`
					>>>>>> `true` or `false` to close the radial menu after clicking.
		>>> - `onExit`
			>>>> - `textUIAreaSidejob(type)`
				>>>>> - For ***onExit***, you only need `type`.
				>>>>> - `type`: `string`
					>>>>>> Use `show` or `hide` for ***onExit*** zone, use `hide`.
			>>>> - `conditionalRadialMenuAreaSidejob(action, id)`
				>>>>> - For ***onExit***, you only need `action` and `id` according to the ID you created in ***onEnter***.
				>>>>> - `action`: `string` 
					>>>>>> Use `show` or `hide` for ***onExit*** zone, use `hide`.
				>>>>> - `id`: `string` 
					>>>>>> For example, `'taking:jobname'`, the ID you created during ***onEnter***.
:::

::: details README PROCESS
- `PROCESS`
	> - `AddEventHandler('proses:jobname', function()` 
		>> Event for the job's radial menu to process items.
	> - `coords`: `vec3(x, y,z)`
		>> Coordinates for the process point.
	> - `radius`: `number`
		>> Radius for the process point.
	> - `debug`: `boolean`
		>> Debug the process point, `true` or `false`.
	> - `processItemSidejob('jobname')`
		>> Replace ***`jobname`*** with the name of the job you're creating.
		>>> - `onEnter`
			>>>> - `textUIAreaSidejob(type, text, icon)`
				>>>>> - `type`: `string` 
					>>>>>> Use `show` or `hide` for ***onEnter*** zone, use `show`.
				>>>>> - `text`: `string` 
					>>>>>> Text UI label.
				>>>>> - `icon`: `string` 
					>>>>>> Text UI icon.
			>>>> - `conditionalRadialMenuAreaSidejob(action, id, title, icon, eventType, event, shouldClose)`
				>>>>> - `action`: `string` 
					>>>>>> Use `show` or `hide` for ***onEnter*** zone, use `show`.
				>>>>> - `id`: `string` 
					>>>>>> For example, `'proses:jobname'`. The ID must be unique because it will be used for ***onExit***.
				>>>>> - `title`: `string` 
					>>>>>> Radial menu label.
				>>>>> - `icon`: `string` 
					>>>>>> Radial menu icon.
				>>>>> - `eventType`: `string` 
					>>>>>> `event` or `command`.
				>>>>> - `event`: `string` 
					>>>>>> Trigger event, for example, `'proses:jobname'` for processing using the radial menu.
				>>>>> - `shouldClose`: `boolean`
					>>>>>> `true` or `false` to close the radial menu after clicking.
		>>> - `onExit`
			>>>> - `textUIAreaSidejob(type)`
				>>>>> - For ***onExit***, you only need `type`.
				>>>>> - `type`: `string`
					>>>>>> Use `show` or `hide` for ***onExit*** zone, use `hide`.
			>>>> - `conditionalRadialMenuAreaSidejob(action, id)`
				>>>>> - For ***onExit***, you only need `action` and `id` according to the ID you created in ***onEnter***.
				>>>>> - `action`: `string` 
					>>>>>> Use `show` or `hide` for ***onExit*** zone, use `hide`.
				>>>>> - `id`: `string` 
					>>>>>> For example, `'proses:jobname'`, the ID you created during ***onEnter***.
:::

::: details README PACKING
- `PACKING`
	> - `AddEventHandler('packing:jobname', function()` 
		>> Event for the job's radial menu to pack items.
	> - `coords`: `vec3(x, y,z)`
		>> Coordinates for the packing point.
	> - `radius`: `number`
		>> Radius for the packing point.
	> - `debug`: `boolean`
		>> Debug the packing point, `true` or `false`.
	> - `packingItemSidejob('jobname')`
		>> Replace ***`jobname`*** with the name of the job you're creating.
		>>> - `onEnter`
			>>>> - `textUIAreaSidejob(type, text, icon)`
				>>>>> - `type`: `string` 
					>>>>>> Use `show` or `hide` for ***onEnter*** zone, use `show`.
				>>>>> - `text`: `string` 
					>>>>>> Text UI label.
				>>>>> - `icon`: `string` 
					>>>>>> Text UI icon.
			>>>> - `conditionalRadialMenuAreaSidejob(action, id, title, icon, eventType, event, shouldClose)`
				>>>>> - `action`: `string` 
					>>>>>> Use `show` or `hide` for ***onEnter*** zone, use `show`.
				>>>>> - `id`: `string` 
					>>>>>> For example, `'packing:jobname'`. The ID must be unique because it will be used for ***onExit***.
				>>>>> - `title`: `string` 
					>>>>>> Radial menu label.
				>>>>> - `icon`: `string` 
					>>>>>> Radial menu icon.
				>>>>> - `eventType`: `string` 
					>>>>>> `event` atau `command`
				>>>>> - `event` or `command`.
					>>>>>> Trigger event, for example, `'packing:jobname'` for packing using the radial menu.
				>>>>> - `shouldClose`: `boolean`
					>>>>>> `true` or `false` to close the radial menu after clicking.
		>>> - `onExit`
			>>>> - `textUIAreaSidejob(type)`
				>>>>> - For ***onExit***, you only need `type`.
				>>>>> - `type`: `string`
					>>>>>> Use `show` or `hide` for ***onExit*** zone, use `hide`.
			>>>> - `conditionalRadialMenuAreaSidejob(action, id)`
				>>>>> - For ***onExit***, you only need `action` and `id` according to the ID you created in ***onEnter***.
				>>>>> - `action`: `string` 
					>>>>>> Use `show` or `hide` for ***onExit*** zone, use `hide`.
				>>>>> - `id`: `string` 
					>>>>>> For example, `'packing:jobname'`, the ID you created during ***onEnter***.
:::

::: details SCRIPT INTERACTION
```lua
local target = exports.ox_target
local drawZones = Config.Debug

-- BOSS --
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