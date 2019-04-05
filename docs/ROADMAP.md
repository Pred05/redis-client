# Roadmap

The first approach is to cover utmost redis commands until user made feedback and ask for features.

To begin only basics commands will be implemented to release an usable tools. The goal is to prioritize features and do not develop useless one. 

## Basics

### Home

|Description|Status|
|-----------|------|
|List saved redis database|OK|
|Add redis database button|OK|
|Start local redis database|Not analysed| 

#### List saved redis database

|Description|Status|
|-----------|------|
||OK|

#### Add redis database

|Description|Status|
|-----------|------|
|Basic form without auth|OK|
|Form with auth|Not analysed| 

## Redis commands

Exhaustive list of redis commands with it development status.

TODO: separate commands by category (DATA ACCESS, OPERATION,  EVENT, ...)

|Command|Description|Status|
|-------|-----------|------|
|**APPEND** key value|Append a value to a key|Not analysed|
|**AUTH** password|Authenticate to the server|Not analysed|
|**BGREWRITEAOF**|Asynchronously rewrite the append-only file|Not analysed|
|**BGSAVE**|Asynchronously save the dataset to disk|Not analysed|
|**BITCOUNT** key [start end]|Count set bits in a string|Not analysed|
|**BITFIELD** key [**GET** type offset] [**SET** type offset value] [**INCRBY** type offset increment] [**OVERFLOW** **WRAP**&#124;**SAT**&#124;**FAIL**]|Perform arbitrary bitfield integer operations on strings|Not analysed|
|**BITOP** operation destkey key [key ...]|Perform bitwise operations between strings|Not analysed|
|**BITPOS** key bit [start] [end]|Find first bit set or clear in a string|Not analysed|
|**BLPOP** key [key ...] timeout|Remove and get the first element in a list, or block until one is available|Not analysed|
|**BRPOP** key [key ...] timeout|Remove and get the last element in a list, or block until one is available|Not analysed|
|**BRPOPLPUSH** source destination timeout|Pop a value from a list, push it to another list and return it; or block until one is available|Not analysed|
|**BZPOPMIN** key [key ...] timeout|Remove and return the member with the lowest score from one or more sorted sets, or block until one is available|Not analysed|
|**BZPOPMAX** key [key ...] timeout|Remove and return the member with the highest score from one or more sorted sets, or block until one is available|Not analysed|
|**CLIENT** **ID**|Returns the client ID for the current connection|Not analysed|
|**CLIENT** **KILL** [ip:port] [**ID** client-id] [**TYPE** normal&#124;master&#124;slave&#124;pubsub] [**ADDR** ip:port] [**SKIPME** yes/no]|Kill the connection of a client|Not analysed|
|**CLIENT** **LIST** [**TYPE** normal&#124;master&#124;replica&#124;pubsub]|Get the list of client connections|Not analysed|
|**CLIENT** **GETNAME**|Get the current connection name|Not analysed|
|**CLIENT** **PAUSE** timeout|Stop processing commands from clients for some time|Not analysed|
|**CLIENT** **REPLY** **ON**&#124;**OFF**&#124;**SKIP**|Instruct the server whether to reply to commands|Not analysed|
|**CLIENT** **SETNAME** connection-name|Set the current connection name|Not analysed|
|**CLIENT** **UNBLOCK** client-id [**TIMEOUT**&#124;**ERROR**]|Unblock a client blocked in a blocking command from a different connection|Not analysed|
|**CLUSTER** **ADDSLOTS** slot [slot ...]|Assign new hash slots to receiving node|Not analysed|
|**CLUSTER** **COUNT**-**FAILURE**-**REPORTS** node-id|Return the number of failure reports active for a given node|Not analysed|
|**CLUSTER** **COUNTKEYSINSLOT** slot|Return the number of local keys in the specified hash slot|Not analysed|
|**CLUSTER** **DELSLOTS** slot [slot ...]|Set hash slots as unbound in receiving node|Not analysed|
|**CLUSTER** **FAILOVER** [**FORCE**&#124;**TAKEOVER**]|Forces a replica to perform a manual failover of its master.|Not analysed|
|**CLUSTER** **FORGET** node-id|Remove a node from the nodes table|Not analysed|
|**CLUSTER** **GETKEYSINSLOT** slot count|Return local key names in the specified hash slot|Not analysed|
|**CLUSTER** **INFO**|Provides info about Redis Cluster node state|Not analysed|
|**CLUSTER** **KEYSLOT** key|Returns the hash slot of the specified key|Not analysed|
|**CLUSTER** **MEET** ip port|Force a node cluster to handshake with another node|Not analysed|
|**CLUSTER** **NODES**|Get Cluster config for the node|Not analysed|
|**CLUSTER** **REPLICATE** node-id|Reconfigure a node as a replica of the specified master node|Not analysed|
|**CLUSTER** **RESET** [**HARD**&#124;**SOFT**]|Reset a Redis Cluster node|Not analysed|
|**CLUSTER** **SAVECONFIG**|Forces the node to save cluster state on disk|Not analysed|
|**CLUSTER** **SET**-**CONFIG**-**EPOCH** config-epoch|Set the configuration epoch in a new node|Not analysed|
|**CLUSTER** **SETSLOT** slot **IMPORTING**&#124;**MIGRATING**&#124;**STABLE**&#124;**NODE** [node-id]|Bind a hash slot to a specific node|Not analysed|
|**CLUSTER** **SLAVES** node-id|List replica nodes of the specified master node|Not analysed|
|**CLUSTER** **REPLICAS** node-id|List replica nodes of the specified master node|Not analysed|
|**CLUSTER** **SLOTS**|Get array of Cluster slot to node mappings|Not analysed|
|**COMMAND**|Get array of Redis command details|Not analysed|
|**COMMAND** **COUNT**|Get total number of Redis commands|Not analysed|
|**COMMAND** **GETKEYS**|Extract keys given a full Redis command|Not analysed|
|**COMMAND** **INFO** command-name [command-name ...]|Get array of specific Redis command details|Not analysed|
|**CONFIG** **GET** parameter|Get the value of a configuration parameter|Not analysed|
|**CONFIG** **REWRITE**|Rewrite the configuration file with the in memory configuration|Not analysed|
|**CONFIG** **SET** parameter value|Set a configuration parameter to the given value|Not analysed|
|**CONFIG** **RESETSTAT**|Reset the stats returned by INFO|Not analysed|
|**DBSIZE**|Return the number of keys in the selected database|Not analysed|
|**DEBUG** **OBJECT** key|Get debugging information about a key|Not analysed|
|**DEBUG** **SEGFAULT**|Make the server crash|Not analysed|
|**DECR** key|Decrement the integer value of a key by one|Not analysed|
|**DECRBY** key decrement|Decrement the integer value of a key by the given number|Not analysed|
|**DEL** key [key ...]|Delete a key|Not analysed|
|**DISCARD**|Discard all commands issued after MULTI|Not analysed|
|**DUMP** key|Return a serialized version of the value stored at the specified key.|Not analysed|
|**ECHO** message|Echo the given string|Not analysed|
|**EVAL** script numkeys key [key ...] arg [arg ...]|Execute a Lua script server side|Not analysed|
|**EVALSHA** sha1 numkeys key [key ...] arg [arg ...]|Execute a Lua script server side|Not analysed|
|**EXEC**|Execute all commands issued after MULTI|Not analysed|
|**EXISTS** key [key ...]|Determine if a key exists|Not analysed|
|**EXPIRE** key seconds|Set a key's time to live in seconds|Not analysed|
|**EXPIREAT** key timestamp|Set the expiration for a key as a UNIX timestamp|Not analysed|
|**FLUSHALL** [**ASYNC**]|Remove all keys from all databases|Not analysed|
|**FLUSHDB** [**ASYNC**]|Remove all keys from the current database|Not analysed|
|**GEOADD** key longitude latitude member [longitude latitude member ...]|Add one or more geospatial items in the geospatial index represented using a sorted set|Not analysed|
|**GEOHASH** key member [member ...]|Returns members of a geospatial index as standard geohash strings|Not analysed|
|**GEOPOS** key member [member ...]|Returns longitude and latitude of members of a geospatial index|Not analysed|
|**GEODIST** key member1 member2 [unit]|Returns the distance between two members of a geospatial index|Not analysed|
|**GEORADIUS** key longitude latitude radius m&#124;km&#124;ft&#124;mi [**WITHCOORD**] [**WITHDIST**] [**WITHHASH**] [**COUNT** count] [**ASC**&#124;**DESC**] [**STORE** key] [**STOREDIST** key]|Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point|Not analysed|
|**GEORADIUSBYMEMBER** key member radius m&#124;km&#124;ft&#124;mi [**WITHCOORD**] [**WITHDIST**] [**WITHHASH**] [**COUNT** count] [**ASC**&#124;**DESC**] [**STORE** key] [**STOREDIST** key]|Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member|Not analysed|
|**GET** key|Get the value of a key|Not analysed|
|**GETBIT** key offset|Returns the bit value at offset in the string value stored at key|Not analysed|
|**GETRANGE** key start end|Get a substring of the string stored at a key|Not analysed|
|**GETSET** key value|Set the string value of a key and return its old value|Not analysed|
|**HDEL** key field [field ...]|Delete one or more hash fields|Not analysed|
|**HEXISTS** key field|Determine if a hash field exists|Not analysed|
|**HGET** key field|Get the value of a hash field|Not analysed|
|**HGETALL** key|Get all the fields and values in a hash|Not analysed|
|**HINCRBY** key field increment|Increment the integer value of a hash field by the given number|Not analysed|
|**HINCRBYFLOAT** key field increment|Increment the float value of a hash field by the given amount|Not analysed|
|**HKEYS** key|Get all the fields in a hash|Not analysed|
|**HLEN** key|Get the number of fields in a hash|Not analysed|
|**HMGET** key field [field ...]|Get the values of all the given hash fields|Not analysed|
|**HMSET** key field value [field value ...]|Set multiple hash fields to multiple values|Not analysed|
|**HSET** key field value|Set the string value of a hash field|Not analysed|
|**HSETNX** key field value|Set the value of a hash field, only if the field does not exist|Not analysed|
|**HSTRLEN** key field|Get the length of the value of a hash field|Not analysed|
|**HVALS** key|Get all the values in a hash|Not analysed|
|**INCR** key|Increment the integer value of a key by one|Not analysed|
|**INCRBY** key increment|Increment the integer value of a key by the given amount|Not analysed|
|**INCRBYFLOAT** key increment|Increment the float value of a key by the given amount|Not analysed|
|**INFO** [section]|Get information and statistics about the server|Not analysed|
|**KEYS** pattern|Find all keys matching the given pattern|Not analysed|
|**LASTSAVE**|Get the UNIX time stamp of the last successful save to disk|Not analysed|
|**LINDEX** key index|Get an element from a list by its index|Not analysed|
|**LINSERT** key **BEFORE**&#124;**AFTER** pivot value|Insert an element before or after another element in a list|Not analysed|
|**LLEN** key|Get the length of a list|Not analysed|
|**LPOP** key|Remove and get the first element in a list|Not analysed|
|**LPUSH** key value [value ...]|Prepend one or multiple values to a list|Not analysed|
|**LPUSHX** key value|Prepend a value to a list, only if the list exists|Not analysed|
|**LRANGE** key start stop|Get a range of elements from a list|Not analysed|
|**LREM** key count value|Remove elements from a list|Not analysed|
|**LSET** key index value|Set the value of an element in a list by its index|Not analysed|
|**LTRIM** key start stop|Trim a list to the specified range|Not analysed|
|**MEMORY** **DOCTOR**|Outputs memory problems report|Not analysed|
|**MEMORY** **HELP**|Show helpful text about the different subcommands|Not analysed|
|**MEMORY** **MALLOC**-**STATS**|Show allocator internal stats|Not analysed|
|**MEMORY** **PURGE**|Ask the allocator to release memory|Not analysed|
|**MEMORY** **STATS**|Show memory usage details|Not analysed|
|**MEMORY** **USAGE** key [**SAMPLES** count]|Estimate the memory usage of a key|Not analysed|
|**MGET** key [key ...]|Get the values of all the given keys|Not analysed|
|**MIGRATE** host port key&#124;"" destination-db timeout [**COPY**] [**REPLACE**] [**KEYS** key [key ...]]|Atomically transfer a key from a Redis instance to another one.|Not analysed|
|**MONITOR**|Listen for all requests received by the server in real time|Not analysed|
|**MOVE** key db|Move a key to another database|Not analysed|
|**MSET** key value [key value ...]|Set multiple keys to multiple values|Not analysed|
|**MSETNX** key value [key value ...]|Set multiple keys to multiple values, only if none of the keys exist|Not analysed|
|**MULTI**|Mark the start of a transaction block|Not analysed|
|**OBJECT** subcommand [arguments [arguments ...]]|Inspect the internals of Redis objects|Not analysed|
|**PERSIST** key|Remove the expiration from a key|Not analysed|
|**PEXPIRE** key milliseconds|Set a key's time to live in milliseconds|Not analysed|
|**PEXPIREAT** key milliseconds-timestamp|Set the expiration for a key as a UNIX timestamp specified in milliseconds|Not analysed|
|**PFADD** key element [element ...]|Adds the specified elements to the specified HyperLogLog.|Not analysed|
|**PFCOUNT** key [key ...]|Return the approximated cardinality of the set(s) observed by the HyperLogLog at key(s).|Not analysed|
|**PFMERGE** destkey sourcekey [sourcekey ...]|Merge N different HyperLogLogs into a single one.|Not analysed|
|**PING** [message]|Ping the server|Not analysed|
|**PSETEX** key milliseconds value|Set the value and expiration in milliseconds of a key|Not analysed|
|**PSUBSCRIBE** pattern [pattern ...]|Listen for messages published to channels matching the given patterns|Not analysed|
|**PUBSUB** subcommand [argument [argument ...]]|Inspect the state of the Pub/Sub subsystem|Not analysed|
|**PTTL** key|Get the time to live for a key in milliseconds|Not analysed|
|**PUBLISH** channel message|Post a message to a channel|Not analysed|
|**PUNSUBSCRIBE** [pattern [pattern ...]]|Stop listening for messages posted to channels matching the given patterns|Not analysed|
|**QUIT**|Close the connection|Not analysed|
|**RANDOMKEY**|Return a random key from the keyspace|Not analysed|
|**READONLY**|Enables read queries for a connection to a cluster replica node|Not analysed|
|**READWRITE**|Disables read queries for a connection to a cluster replica node|Not analysed|
|**RENAME** key newkey|Rename a key|Not analysed|
|**RENAMENX** key newkey|Rename a key, only if the new key does not exist|Not analysed|
|**RESTORE** key ttl serialized-value [**REPLACE**] [**ABSTTL**] [**IDLETIME** seconds] [**FREQ** frequency]|Create a key using the provided serialized value, previously obtained using DUMP.|Not analysed|
|**ROLE**|Return the role of the instance in the context of replication|Not analysed|
|**RPOP** key|Remove and get the last element in a list|Not analysed|
|**RPOPLPUSH** source destination|Remove the last element in a list, prepend it to another list and return it|Not analysed|
|**RPUSH** key value [value ...]|Append one or multiple values to a list|Not analysed|
|**RPUSHX** key value|Append a value to a list, only if the list exists|Not analysed|
|**SADD** key member [member ...]|Add one or more members to a set|Not analysed|
|**SAVE**|Synchronously save the dataset to disk|Not analysed|
|**SCARD** key|Get the number of members in a set|Not analysed|
|**SCRIPT** **DEBUG** **YES**&#124;**SYNC**&#124;**NO**|Set the debug mode for executed scripts.|Not analysed|
|**SCRIPT** **EXISTS** sha1 [sha1 ...]|Check existence of scripts in the script cache.|Not analysed|
|**SCRIPT** **FLUSH**|Remove all the scripts from the script cache.|Not analysed|
|**SCRIPT** **KILL**|Kill the script currently in execution.|Not analysed|
|**SCRIPT** **LOAD** script|Load the specified Lua script into the script cache.|Not analysed|
|**SDIFF** key [key ...]|Subtract multiple sets|Not analysed|
|**SDIFFSTORE** destination key [key ...]|Subtract multiple sets and store the resulting set in a key|Not analysed|
|**SELECT** index|Change the selected database for the current connection|Not analysed|
|**SET** key value [expiration **EX** seconds&#124;**PX** milliseconds] [**NX**&#124;**XX**]|Set the string value of a key|Not analysed|
|**SETBIT** key offset value|Sets or clears the bit at offset in the string value stored at key|Not analysed|
|**SETEX** key seconds value|Set the value and expiration of a key|Not analysed|
|**SETNX** key value|Set the value of a key, only if the key does not exist|Not analysed|
|**SETRANGE** key offset value|Overwrite part of a string at key starting at the specified offset|Not analysed|
|**SHUTDOWN** [**NOSAVE**&#124;**SAVE**]|Synchronously save the dataset to disk and then shut down the server|Not analysed|
|**SINTER** key [key ...]|Intersect multiple sets|Not analysed|
|**SINTERSTORE** destination key [key ...]|Intersect multiple sets and store the resulting set in a key|Not analysed|
|**SISMEMBER** key member|Determine if a given value is a member of a set|Not analysed|
|**SLAVEOF** host port|Make the server a replica of another instance, or promote it as master. Deprecated starting with Redis 5. Use REPLICAOF instead.|Not analysed|
|**REPLICAOF** host port|Make the server a replica of another instance, or promote it as master.|Not analysed|
|**SLOWLOG** subcommand [argument]|Manages the Redis slow queries log|Not analysed|
|**SMEMBERS** key|Get all the members in a set|Not analysed|
|**SMOVE** source destination member|Move a member from one set to another|Not analysed|
|**SORT** key [**BY** pattern] [**LIMIT** offset count] [**GET** pattern [**GET** pattern ...]] [**ASC**&#124;**DESC**] [**ALPHA**] [**STORE** destination]|Sort the elements in a list, set or sorted set|Not analysed|
|**SPOP** key [count]|Remove and return one or multiple random members from a set|Not analysed|
|**SRANDMEMBER** key [count]|Get one or multiple random members from a set|Not analysed|
|**SREM** key member [member ...]|Remove one or more members from a set|Not analysed|
|**STRLEN** key|Get the length of the value stored in a key|Not analysed|
|**SUBSCRIBE** channel [channel ...]|Listen for messages published to the given channels|Not analysed|
|**SUNION** key [key ...]|Add multiple sets|Not analysed|
|**SUNIONSTORE** destination key [key ...]|Add multiple sets and store the resulting set in a key|Not analysed|
|**SWAPDB** index index|Swaps two Redis databases|Not analysed|
|**SYNC**|Internal command used for replication|Not analysed|
|**TIME**|Return the current server time|Not analysed|
|**TOUCH** key [key ...]|Alters the last access time of a key(s). Returns the number of existing keys specified.|Not analysed|
|**TTL** key|Get the time to live for a key|Not analysed|
|**TYPE** key|Determine the type stored at key|Not analysed|
|**UNSUBSCRIBE** [channel [channel ...]]|Stop listening for messages posted to the given channels|Not analysed|
|**UNLINK** key [key ...]|Delete a key asynchronously in another thread. Otherwise it is just as DEL, but non blocking.|Not analysed|
|**UNWATCH**|Forget about all watched keys|Not analysed|
|**WAIT** numreplicas timeout|Wait for the synchronous replication of all the write commands sent in the context of the current connection|Not analysed|
|**WATCH** key [key ...]|Watch the given keys to determine execution of the MULTI/EXEC block|Not analysed|
|**ZADD** key [**NX**&#124;**XX**] [**CH**] [**INCR**] score member [score member ...]|Add one or more members to a sorted set, or update its score if it already exists|Not analysed|
|**ZCARD** key|Get the number of members in a sorted set|Not analysed|
|**ZCOUNT** key min max|Count the members in a sorted set with scores within the given values|Not analysed|
|**ZINCRBY** key increment member|Increment the score of a member in a sorted set|Not analysed|
|**ZINTERSTORE** destination numkeys key [key ...] [**WEIGHTS** weight [weight ...]] [**AGGREGATE** **SUM**&#124;**MIN**&#124;**MAX**]|Intersect multiple sorted sets and store the resulting sorted set in a new key|Not analysed|
|**ZLEXCOUNT** key min max|Count the number of members in a sorted set between a given lexicographical range|Not analysed|
|**ZPOPMAX** key [count]|Remove and return members with the highest scores in a sorted set|Not analysed|
|**ZPOPMIN** key [count]|Remove and return members with the lowest scores in a sorted set|Not analysed|
|**ZRANGE** key start stop [**WITHSCORES**]|Return a range of members in a sorted set, by index|Not analysed|
|**ZRANGEBYLEX** key min max [**LIMIT** offset count]|Return a range of members in a sorted set, by lexicographical range|Not analysed|
|**ZREVRANGEBYLEX** key max min [**LIMIT** offset count]|Return a range of members in a sorted set, by lexicographical range, ordered from higher to lower strings.|Not analysed|
|**ZRANGEBYSCORE** key min max [**WITHSCORES**] [**LIMIT** offset count]|Return a range of members in a sorted set, by score|Not analysed|
|**ZRANK** key member|Determine the index of a member in a sorted set|Not analysed|
|**ZREM** key member [member ...]|Remove one or more members from a sorted set|Not analysed|
|**ZREMRANGEBYLEX** key min max|Remove all members in a sorted set between the given lexicographical range|Not analysed|
|**ZREMRANGEBYRANK** key start stop|Remove all members in a sorted set within the given indexes|Not analysed|
|**ZREMRANGEBYSCORE** key min max|Remove all members in a sorted set within the given scores|Not analysed|
|**ZREVRANGE** key start stop [**WITHSCORES**]|Return a range of members in a sorted set, by index, with scores ordered from high to low|Not analysed|
|**ZREVRANGEBYSCORE** key max min [**WITHSCORES**] [**LIMIT** offset count]|Return a range of members in a sorted set, by score, with scores ordered from high to low|Not analysed|
|**ZREVRANK** key member|Determine the index of a member in a sorted set, with scores ordered from high to low|Not analysed|
|**ZSCORE** key member|Get the score associated with the given member in a sorted set|Not analysed|
|**ZUNIONSTORE** destination numkeys key [key ...] [**WEIGHTS** weight [weight ...]] [**AGGREGATE** **SUM**&#124;**MIN**&#124;**MAX**]|Add multiple sorted sets and store the resulting sorted set in a new key|Not analysed|
|**SCAN** cursor [**MATCH** pattern] [**COUNT** count]|Incrementally iterate the keys space|Not analysed|
|**SSCAN** key cursor [**MATCH** pattern] [**COUNT** count]|Incrementally iterate Set elements|Not analysed|
|**HSCAN** key cursor [**MATCH** pattern] [**COUNT** count]|Incrementally iterate hash fields and associated values|Not analysed|
|**ZSCAN** key cursor [**MATCH** pattern] [**COUNT** count]|Incrementally iterate sorted sets elements and associated scores|Not analysed|
|**XINFO** [**CONSUMERS** key groupname] [**GROUPS** key] [**STREAM** key] [**HELP**]|Get information on streams and consumer groups|Not analysed|
|**XADD** key **ID** field string [field string ...]|Appends a new entry to a stream|Not analysed|
|**XTRIM** key **MAXLEN** [~] count|Trims the stream to (approximately if '~' is passed) a certain size|Not analysed|
|**XDEL** key **ID** [**ID** ...]|Removes the specified entries from the stream. Returns the number of items actually deleted, that may be different from the number of IDs passed in case certain IDs do not exist.|Not analysed|
|**XRANGE** key start end [**COUNT** count]|Return a range of elements in a stream, with IDs matching the specified IDs interval|Not analysed|
|**XREVRANGE** key end start [**COUNT** count]|Return a range of elements in a stream, with IDs matching the specified IDs interval, in reverse order (from greater to smaller IDs) compared to XRANGE|Not analysed|
|**XLEN** key|Return the number of entires in a stream|Not analysed|
|**XREAD** [**COUNT** count] [**BLOCK** milliseconds] **STREAMS** key [key ...] **ID** [**ID** ...]|Return never seen elements in multiple streams, with IDs greater than the ones reported by the caller for each stream. Can block.|Not analysed|
|**XGROUP** [**CREATE** key groupname id-or-$] [**SETID** key groupname id-or-$] [**DESTROY** key groupname] [**DELCONSUMER** key groupname consumername]|Create, destroy, and manage consumer groups.|Not analysed|
|**XREADGROUP** **GROUP** group consumer [**COUNT** count] [**BLOCK** milliseconds] [**NOACK**] **STREAMS** key [key ...] **ID** [**ID** ...]|Return new entries from a stream using a consumer group, or access the history of the pending entries for a given consumer. Can block.|Not analysed|
|**XACK** key group **ID** [**ID** ...]|Marks a pending message as correctly processed, effectively removing it from the pending entries list of the consumer group. Return value of the command is the number of messages successfully acknowledged, that is, the IDs we were actually able to resolve in the PEL.|Not analysed|
|**XCLAIM** key group consumer min-idle-time **ID** [**ID** ...] [**IDLE** ms] [**TIME** ms-unix-time] [**RETRYCOUNT** count] [**FORCE**] [**JUSTID**]|Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.|Not analysed|
|**XPENDING** key group [start end count] [consumer]|Return information and entries from a stream consumer group pending entries list, that are messages fetched but never acknowledged.|Not analysed|
