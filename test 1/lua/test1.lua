m1 = {1, 2, 3, 2, 0, 2}
m2 = {5, 1, 2, 7, 3, 2}

local inspect = require('inspect')

counter = {}
allInputs = {m1, m2}

for allInpKey, allInpVal in pairs(allInputs) do
    for subArrKey, subArrVal in pairs(allInpVal) do
        if not counter[subArrVal] then
            counter[subArrVal] = {}
            for i, x in pairs(allInputs) do
                counter[subArrVal][i] = 0
            end
        end
        counter[subArrVal][allInpKey] = counter[subArrVal][allInpKey] + 1
    end
end

result = {}
for ci, cv in pairs(counter) do
    for cvi, cvv in pairs(cv) do
        min = cvv
        break
    end
    for cvi, cvv in pairs(cv) do
        if (cvv < min) then min = cvv end
    end
    if min > 0 then
        for i = 1, min do
            table.insert(result, ci)
        end
    end
end

print(inspect(result))