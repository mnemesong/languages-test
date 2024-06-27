inp = {"eat", "tea", "tan", "ate", "nat", "bat"}

local inspect = require('inspect')

groups = {}
for inpi, inpv in pairs(inp) do
    local chars = {}
    inpv:gsub(".", function(c) table.insert(chars,c) end)
    table.sort(chars, function(a, b) return a:upper() < b:upper() end)
    local str = ""
    for i, v in pairs(chars) do str = str .. v end
    if not groups[str] then groups[str] = {} end
    table.insert(groups[str], inpv)
end

print(inspect(groups))