---
aside: true
title: L-JOB
description: L-JOB Documentation.
titleTemplate: :title | Setup
---

# Requirements
::: warning REQRUITMENTS
- [ESX Legacy](https://github.com/overextended/ox_target)
- [OX LIB](https://github.com/overextended/ox_lib)
- [OX TARGET](https://github.com/overextended/ox_target)
:::

## Penggunaan
::: tip PENGGUNAAN
- Pastikan nama sumber daya (Resource Name) adalah `l-job`
- Masukkan data ke dalam tabel SQL pekerjaan [Jobs](#jobs)
- Masukkan data ke dalam tabel item [Items](#items)
- Mulai sumber daya dengan cara `ensure l-job` 
:::

## Pekerjaan
::: tip INFO
Anda perlu memasukkan data ke dalam tabel SQL untuk pekerjaan (jobs), jika Anda ingin menggunakannya job untuk memulai pekerjaan.
:::

::: details SQL QUERY
```sql
INSERT INTO `jobs` (name, label) VALUES
	('jobsusu', 'Milkman'),
	('jobayam', 'Slaughterer'),
	('jobpenambang', 'Miner'),
	('jobpenjahit', 'Tailor'),
	('jobpenebang', 'Lumberjack'),
	('jobnelayan', 'Fisherman'),
;

INSERT INTO `job_grades` (job_name, grade, name, label, salary, skin_male, skin_female) VALUES
	('jobsusu', 0, 'karyawan', 'Worker', 0, '{}', '{}'),
	('jobayam', 0, 'karyawan', 'Worker', 0, '{}', '{}'),
	('jobpenambang', 0, 'karyawan', 'Worker', 0, '{}', '{}'),
	('jobpenjahit', 0, 'karyawan', 'Worker', 0, '{}', '{}'),
	('jobpenebang', 0, 'karyawan', 'Worker', 0, '{}', '{}'),
	('jobnelayan', 0, 'karyawan', 'Worker', 0, '{}', '{}'),
;
```
:::

## Item
::: tip INFO
Tambahkan item-item default ke dalam `ox_inventory/data/items.lua` atau masukkan versi SQL ke dalam database sesuai kebutuhan.
:::

::: details OX_INVENTORY
```lua
['botol_kaca'] = {
	label = 'Glass Bottle',
	weight = 1000,
	stack = true,
	close = true,
	description = 'To hold any kind of liquid'
},
['pisau_daging'] = {
	label = 'Butcher Knife',
	weight = 1000,
	stack = true,
	close = true,
	description = 'For processing all types of meat'
},
['smelter_material'] = {
	label = 'Smelter Material',
	weight = 1000,
	stack = true,
	close = true,
	description = 'For melting all kinds of materials'
},
['jarum_jahit'] = {
	label = 'Sewing Needle',
	weight = 1000,
	stack = true,
	close = true,
	description = 'For sewing all kinds of fabrics'
},
['palet_box'] = {
	label = 'Palette Box',
	weight = 1000,
	stack = true,
	close = true,
	description = 'To load all kinds of materials'
},

['ayam_hidup'] = {
	label = 'Broiler',
	weight = 600,
	stack = true,
	close = true,
	description = 'For slaughter and processing'
},
['ayam_potong'] = {
	label = 'Raw Chicken',
	weight = 400,
	stack = true,
	close = true,
	description = 'To be processed and packaged'
},
['ayam_packing'] = {
	label = 'Packaged Chicken',
	weight = 200,
	stack = true,
	close = true,
	description = 'For sale'
},

['susu_sapi'] = {
	label = 'Cows Milk',
	weight = 600,
	stack = true,
	close = true,
	description = 'To be sterilized'
},
['susu_steril'] = {
	label = 'Sterile Milk',
	weight = 400,
	stack = true,
	close = true,
	description = 'To be processed and packaged'
},
['susu_packing'] = {
	label = 'Packaged Milk',
	weight = 200,
	stack = true,
	close = true,
	description = 'For sale'
},

['batukotor_tambang'] = {
	label = 'Quarry Stone',
	weight = 600,
	stack = true,
	close = true,
	description = 'For washing and processing'
},
['bijibesi_tambang'] = {
	label = 'Iron ore',
	weight = 400,
	stack = true,
	close = true,
	description = 'To be melted and processed'
},
['besi_tambang'] = {
	label = 'Iron steel',
	weight = 200,
	stack = true,
	close = true,
	description = 'For sale'
},

['wool_penjahit'] = {
	label = 'Synthetic Wool',
	weight = 600,
	stack = true,
	close = true,
	description = 'For knitting and processing'
},
['kain_penjahit'] = {
	label = 'Fabric',
	weight = 400,
	stack = true,
	close = true,
	description = 'For sewing and processing'
},
['baju_penjahit'] = {
	label = 'Cloth',
	weight = 200,
	stack = true,
	close = true,
	description = 'For sale'
},

['kayu_penebang'] = {
	label = 'Trees',
	weight = 600,
	stack = true,
	close = true,
	description = 'For cutting and processing'
},
['kayu_potong'] = {
	label = 'Wood Chop',
	weight = 400,
	stack = true,
	close = true,
	description = 'To be packaged and processed'
},
['kayu_packing'] = {
	label = 'Wood Plank',
	weight = 200,
	stack = true,
	close = true,
	description = 'For sale'
},

['ikan_hidup'] = {
	label = 'Alive Fish',
	weight = 600,
	stack = true,
	close = true,
	description = 'To be processed'
},
['ikan_potong'] = {
	label = 'Fish Meat',
	weight = 400,
	stack = true,
	close = true,
	description = 'To be packaged and processed'
},
['ikan_packing'] = {
	label = 'Packaged Fish',
	weight = 200,
	stack = true,
	close = true,
	description = 'For sale'
},
```
:::

::: details SQL QUERY
```sql
INSERT INTO `items` (`name`, `label`, `weight`) VALUES
	('botol_kaca', 'Glass Bottle', 1000),
	('pisau_daging', 'Butcher Knife', 1000),
	('smelter_material', 'Smelter Material', 1000),
	('jarum_jahit', 'Sewing Needle', 1000),
	('palet_box', 'Palette Box', 1000),

	('susu_sapi', 'Cows Milk', 600),
	('susu_steril', 'Sterile Milk', 400),
	('susu_packing', 'Packaged Milk', 200),

	('ayam_hidup', 'Broiler', 600),
	('ayam_potong', 'Raw Chicken', 400),
	('ayam_Packing', 'Packaged Chicken', 200),

	('batukotor_tambang', 'Quarry Stone', 600),
	('bijibesi_tambang', 'Iron ore', 400),
	('besi_tambang', 'Iron steel', 200),

	('wool_penjahit', 'Synthetic Wool', 600),
	('kain_penjahit', 'Fabric', 400),
	('baju_penjahit', 'Cloth', 200),

	('kayu_penebang', 'Trees', 600),
	('kayu_potong', 'Wood Chop', 400),
	('kayu_packing', 'Wood Plank', 200),

	('ikan_hidup', 'Alive Fish', 600),
	('ikan_potong', 'Fish Meat', 400),
	('ikan_packing', 'Packaged Fish', 200),
;
```
:::