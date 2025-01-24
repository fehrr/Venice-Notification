local oxmysql = exports.oxmysql

---@param query string
---@param parameters? table
---@return integer result
---returns array of matching rows or result data
exports('executeSync', function(query, parameters)
    local p = promise.new()
    oxmysql:execute(query, parameters, function(result)
        p:resolve(result)
    end, GetInvokingResource())
    return Citizen.Await(p)
end)

---@param query string
---@param parameters? table
---@return table result
---returns array of matching rows or result data
exports('fetchSync', function(query, parameters)
    local p = promise.new()
    oxmysql:fetch(query, parameters, function(result)
        p:resolve(result)
    end, GetInvokingResource())
    return Citizen.Await(p)
end)

---@param query string
---@param parameters? table
---@return table result
---returns table containing key value pairs
exports('singleSync', function(query, parameters)
    local p = promise.new()
    oxmysql:single(query, parameters, function(result)
        p:resolve(result)
    end, GetInvokingResource())
    return Citizen.Await(p)
end)

---@param query string
---@param parameters? table
---@return integer|string
---returns value of the first column of a single row
exports('scalarSync', function(query, parameters)
    local p = promise.new()
    oxmysql:scalar(query, parameters, function(result)
        p:resolve(result)
    end, GetInvokingResource())
    return Citizen.Await(p)
end)

---@param query string
---@param parameters? table
---@return table result
---returns the last inserted id
exports('insertSync', function(query, parameters)
    local p = promise.new()
    oxmysql:insert(query, parameters, function(result)
        p:resolve(result)
    end, GetInvokingResource())
    return Citizen.Await(p)
end)

---@param query string
---@param parameters? table
---@return integer result
---returns number of rows updated by the executed query
exports('updateSync', function(query, parameters)
    local p = promise.new()
    oxmysql:update(query, parameters, function(result)
        p:resolve(result)
    end, GetInvokingResource())
    return Citizen.Await(p)
end)

---@param queries table
---@param parameters? table
---@return boolean result
---returns true when the transaction has succeeded
exports('transactionSync', function(queries, parameters)
    local p = promise.new()
    oxmysql:transaction(queries, parameters, function(result)
        p:resolve(result)
    end, GetInvokingResource())
    return Citizen.Await(p)
end)

---@param query string
---@param parameters table
---@return any result
---supports SELECT, INSERT, UPDATE, and DELETE
---
---return value is based on the number of results and the type of query used
exports('prepareSync', function(query, parameters)
    local p = promise.new()
    oxmysql:prepare(query, parameters, function(result)
        p:resolve(result)
    end, GetInvokingResource())
    return Citizen.Await(p)
end)