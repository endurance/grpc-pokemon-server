/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.pokemon = (function() {

    /**
     * Namespace pokemon.
     * @exports pokemon
     * @namespace
     */
    var pokemon = {};

    pokemon.PokemonService = (function() {

        /**
         * Constructs a new PokemonService service.
         * @memberof pokemon
         * @classdesc Represents a PokemonService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function PokemonService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (PokemonService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = PokemonService;

        /**
         * Creates new PokemonService service using the specified rpc implementation.
         * @function create
         * @memberof pokemon.PokemonService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {PokemonService} RPC service. Useful where requests and/or responses are streamed.
         */
        PokemonService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link pokemon.PokemonService#findAll}.
         * @memberof pokemon.PokemonService
         * @typedef FindAllCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pokemon.PokemonArrayResponse} [response] PokemonArrayResponse
         */

        /**
         * Calls FindAll.
         * @function findAll
         * @memberof pokemon.PokemonService
         * @instance
         * @param {pokemon.IFindAllParams} request FindAllParams message or plain object
         * @param {pokemon.PokemonService.FindAllCallback} callback Node-style callback called with the error, if any, and PokemonArrayResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PokemonService.prototype.findAll = function findAll(request, callback) {
            return this.rpcCall(findAll, $root.pokemon.FindAllParams, $root.pokemon.PokemonArrayResponse, request, callback);
        }, "name", { value: "FindAll" });

        /**
         * Calls FindAll.
         * @function findAll
         * @memberof pokemon.PokemonService
         * @instance
         * @param {pokemon.IFindAllParams} request FindAllParams message or plain object
         * @returns {Promise<pokemon.PokemonArrayResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pokemon.PokemonService#findOne}.
         * @memberof pokemon.PokemonService
         * @typedef FindOneCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pokemon.Pokemon} [response] Pokemon
         */

        /**
         * Calls FindOne.
         * @function findOne
         * @memberof pokemon.PokemonService
         * @instance
         * @param {pokemon.IPokemonById} request PokemonById message or plain object
         * @param {pokemon.PokemonService.FindOneCallback} callback Node-style callback called with the error, if any, and Pokemon
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PokemonService.prototype.findOne = function findOne(request, callback) {
            return this.rpcCall(findOne, $root.pokemon.PokemonById, $root.pokemon.Pokemon, request, callback);
        }, "name", { value: "FindOne" });

        /**
         * Calls FindOne.
         * @function findOne
         * @memberof pokemon.PokemonService
         * @instance
         * @param {pokemon.IPokemonById} request PokemonById message or plain object
         * @returns {Promise<pokemon.Pokemon>} Promise
         * @variation 2
         */

        return PokemonService;
    })();

    pokemon.FindAllParams = (function() {

        /**
         * Properties of a FindAllParams.
         * @memberof pokemon
         * @interface IFindAllParams
         */

        /**
         * Constructs a new FindAllParams.
         * @memberof pokemon
         * @classdesc Represents a FindAllParams.
         * @implements IFindAllParams
         * @constructor
         * @param {pokemon.IFindAllParams=} [properties] Properties to set
         */
        function FindAllParams(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new FindAllParams instance using the specified properties.
         * @function create
         * @memberof pokemon.FindAllParams
         * @static
         * @param {pokemon.IFindAllParams=} [properties] Properties to set
         * @returns {pokemon.FindAllParams} FindAllParams instance
         */
        FindAllParams.create = function create(properties) {
            return new FindAllParams(properties);
        };

        /**
         * Encodes the specified FindAllParams message. Does not implicitly {@link pokemon.FindAllParams.verify|verify} messages.
         * @function encode
         * @memberof pokemon.FindAllParams
         * @static
         * @param {pokemon.IFindAllParams} message FindAllParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindAllParams.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified FindAllParams message, length delimited. Does not implicitly {@link pokemon.FindAllParams.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pokemon.FindAllParams
         * @static
         * @param {pokemon.IFindAllParams} message FindAllParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindAllParams.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindAllParams message from the specified reader or buffer.
         * @function decode
         * @memberof pokemon.FindAllParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pokemon.FindAllParams} FindAllParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindAllParams.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pokemon.FindAllParams();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FindAllParams message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pokemon.FindAllParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pokemon.FindAllParams} FindAllParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindAllParams.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindAllParams message.
         * @function verify
         * @memberof pokemon.FindAllParams
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindAllParams.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a FindAllParams message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pokemon.FindAllParams
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pokemon.FindAllParams} FindAllParams
         */
        FindAllParams.fromObject = function fromObject(object) {
            if (object instanceof $root.pokemon.FindAllParams)
                return object;
            return new $root.pokemon.FindAllParams();
        };

        /**
         * Creates a plain object from a FindAllParams message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pokemon.FindAllParams
         * @static
         * @param {pokemon.FindAllParams} message FindAllParams
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindAllParams.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this FindAllParams to JSON.
         * @function toJSON
         * @memberof pokemon.FindAllParams
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindAllParams.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FindAllParams;
    })();

    pokemon.PokemonArrayResponse = (function() {

        /**
         * Properties of a PokemonArrayResponse.
         * @memberof pokemon
         * @interface IPokemonArrayResponse
         * @property {Array.<pokemon.IPokemonListItem>|null} [pokemon] PokemonArrayResponse pokemon
         */

        /**
         * Constructs a new PokemonArrayResponse.
         * @memberof pokemon
         * @classdesc Represents a PokemonArrayResponse.
         * @implements IPokemonArrayResponse
         * @constructor
         * @param {pokemon.IPokemonArrayResponse=} [properties] Properties to set
         */
        function PokemonArrayResponse(properties) {
            this.pokemon = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PokemonArrayResponse pokemon.
         * @member {Array.<pokemon.IPokemonListItem>} pokemon
         * @memberof pokemon.PokemonArrayResponse
         * @instance
         */
        PokemonArrayResponse.prototype.pokemon = $util.emptyArray;

        /**
         * Creates a new PokemonArrayResponse instance using the specified properties.
         * @function create
         * @memberof pokemon.PokemonArrayResponse
         * @static
         * @param {pokemon.IPokemonArrayResponse=} [properties] Properties to set
         * @returns {pokemon.PokemonArrayResponse} PokemonArrayResponse instance
         */
        PokemonArrayResponse.create = function create(properties) {
            return new PokemonArrayResponse(properties);
        };

        /**
         * Encodes the specified PokemonArrayResponse message. Does not implicitly {@link pokemon.PokemonArrayResponse.verify|verify} messages.
         * @function encode
         * @memberof pokemon.PokemonArrayResponse
         * @static
         * @param {pokemon.IPokemonArrayResponse} message PokemonArrayResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PokemonArrayResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pokemon != null && message.pokemon.length)
                for (var i = 0; i < message.pokemon.length; ++i)
                    $root.pokemon.PokemonListItem.encode(message.pokemon[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PokemonArrayResponse message, length delimited. Does not implicitly {@link pokemon.PokemonArrayResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pokemon.PokemonArrayResponse
         * @static
         * @param {pokemon.IPokemonArrayResponse} message PokemonArrayResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PokemonArrayResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PokemonArrayResponse message from the specified reader or buffer.
         * @function decode
         * @memberof pokemon.PokemonArrayResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pokemon.PokemonArrayResponse} PokemonArrayResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PokemonArrayResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pokemon.PokemonArrayResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.pokemon && message.pokemon.length))
                        message.pokemon = [];
                    message.pokemon.push($root.pokemon.PokemonListItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PokemonArrayResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pokemon.PokemonArrayResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pokemon.PokemonArrayResponse} PokemonArrayResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PokemonArrayResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PokemonArrayResponse message.
         * @function verify
         * @memberof pokemon.PokemonArrayResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PokemonArrayResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pokemon != null && message.hasOwnProperty("pokemon")) {
                if (!Array.isArray(message.pokemon))
                    return "pokemon: array expected";
                for (var i = 0; i < message.pokemon.length; ++i) {
                    var error = $root.pokemon.PokemonListItem.verify(message.pokemon[i]);
                    if (error)
                        return "pokemon." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PokemonArrayResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pokemon.PokemonArrayResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pokemon.PokemonArrayResponse} PokemonArrayResponse
         */
        PokemonArrayResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.pokemon.PokemonArrayResponse)
                return object;
            var message = new $root.pokemon.PokemonArrayResponse();
            if (object.pokemon) {
                if (!Array.isArray(object.pokemon))
                    throw TypeError(".pokemon.PokemonArrayResponse.pokemon: array expected");
                message.pokemon = [];
                for (var i = 0; i < object.pokemon.length; ++i) {
                    if (typeof object.pokemon[i] !== "object")
                        throw TypeError(".pokemon.PokemonArrayResponse.pokemon: object expected");
                    message.pokemon[i] = $root.pokemon.PokemonListItem.fromObject(object.pokemon[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PokemonArrayResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pokemon.PokemonArrayResponse
         * @static
         * @param {pokemon.PokemonArrayResponse} message PokemonArrayResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PokemonArrayResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.pokemon = [];
            if (message.pokemon && message.pokemon.length) {
                object.pokemon = [];
                for (var j = 0; j < message.pokemon.length; ++j)
                    object.pokemon[j] = $root.pokemon.PokemonListItem.toObject(message.pokemon[j], options);
            }
            return object;
        };

        /**
         * Converts this PokemonArrayResponse to JSON.
         * @function toJSON
         * @memberof pokemon.PokemonArrayResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PokemonArrayResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PokemonArrayResponse;
    })();

    pokemon.PokemonById = (function() {

        /**
         * Properties of a PokemonById.
         * @memberof pokemon
         * @interface IPokemonById
         * @property {number|null} [id] PokemonById id
         */

        /**
         * Constructs a new PokemonById.
         * @memberof pokemon
         * @classdesc Represents a PokemonById.
         * @implements IPokemonById
         * @constructor
         * @param {pokemon.IPokemonById=} [properties] Properties to set
         */
        function PokemonById(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PokemonById id.
         * @member {number} id
         * @memberof pokemon.PokemonById
         * @instance
         */
        PokemonById.prototype.id = 0;

        /**
         * Creates a new PokemonById instance using the specified properties.
         * @function create
         * @memberof pokemon.PokemonById
         * @static
         * @param {pokemon.IPokemonById=} [properties] Properties to set
         * @returns {pokemon.PokemonById} PokemonById instance
         */
        PokemonById.create = function create(properties) {
            return new PokemonById(properties);
        };

        /**
         * Encodes the specified PokemonById message. Does not implicitly {@link pokemon.PokemonById.verify|verify} messages.
         * @function encode
         * @memberof pokemon.PokemonById
         * @static
         * @param {pokemon.IPokemonById} message PokemonById message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PokemonById.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            return writer;
        };

        /**
         * Encodes the specified PokemonById message, length delimited. Does not implicitly {@link pokemon.PokemonById.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pokemon.PokemonById
         * @static
         * @param {pokemon.IPokemonById} message PokemonById message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PokemonById.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PokemonById message from the specified reader or buffer.
         * @function decode
         * @memberof pokemon.PokemonById
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pokemon.PokemonById} PokemonById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PokemonById.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pokemon.PokemonById();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PokemonById message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pokemon.PokemonById
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pokemon.PokemonById} PokemonById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PokemonById.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PokemonById message.
         * @function verify
         * @memberof pokemon.PokemonById
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PokemonById.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            return null;
        };

        /**
         * Creates a PokemonById message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pokemon.PokemonById
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pokemon.PokemonById} PokemonById
         */
        PokemonById.fromObject = function fromObject(object) {
            if (object instanceof $root.pokemon.PokemonById)
                return object;
            var message = new $root.pokemon.PokemonById();
            if (object.id != null)
                message.id = object.id | 0;
            return message;
        };

        /**
         * Creates a plain object from a PokemonById message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pokemon.PokemonById
         * @static
         * @param {pokemon.PokemonById} message PokemonById
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PokemonById.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this PokemonById to JSON.
         * @function toJSON
         * @memberof pokemon.PokemonById
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PokemonById.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PokemonById;
    })();

    pokemon.Pokemon = (function() {

        /**
         * Properties of a Pokemon.
         * @memberof pokemon
         * @interface IPokemon
         * @property {number|null} [id] Pokemon id
         * @property {string|null} [name] Pokemon name
         */

        /**
         * Constructs a new Pokemon.
         * @memberof pokemon
         * @classdesc Represents a Pokemon.
         * @implements IPokemon
         * @constructor
         * @param {pokemon.IPokemon=} [properties] Properties to set
         */
        function Pokemon(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pokemon id.
         * @member {number} id
         * @memberof pokemon.Pokemon
         * @instance
         */
        Pokemon.prototype.id = 0;

        /**
         * Pokemon name.
         * @member {string} name
         * @memberof pokemon.Pokemon
         * @instance
         */
        Pokemon.prototype.name = "";

        /**
         * Creates a new Pokemon instance using the specified properties.
         * @function create
         * @memberof pokemon.Pokemon
         * @static
         * @param {pokemon.IPokemon=} [properties] Properties to set
         * @returns {pokemon.Pokemon} Pokemon instance
         */
        Pokemon.create = function create(properties) {
            return new Pokemon(properties);
        };

        /**
         * Encodes the specified Pokemon message. Does not implicitly {@link pokemon.Pokemon.verify|verify} messages.
         * @function encode
         * @memberof pokemon.Pokemon
         * @static
         * @param {pokemon.IPokemon} message Pokemon message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pokemon.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified Pokemon message, length delimited. Does not implicitly {@link pokemon.Pokemon.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pokemon.Pokemon
         * @static
         * @param {pokemon.IPokemon} message Pokemon message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pokemon.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Pokemon message from the specified reader or buffer.
         * @function decode
         * @memberof pokemon.Pokemon
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pokemon.Pokemon} Pokemon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pokemon.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pokemon.Pokemon();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Pokemon message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pokemon.Pokemon
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pokemon.Pokemon} Pokemon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pokemon.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Pokemon message.
         * @function verify
         * @memberof pokemon.Pokemon
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Pokemon.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a Pokemon message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pokemon.Pokemon
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pokemon.Pokemon} Pokemon
         */
        Pokemon.fromObject = function fromObject(object) {
            if (object instanceof $root.pokemon.Pokemon)
                return object;
            var message = new $root.pokemon.Pokemon();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a Pokemon message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pokemon.Pokemon
         * @static
         * @param {pokemon.Pokemon} message Pokemon
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Pokemon.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this Pokemon to JSON.
         * @function toJSON
         * @memberof pokemon.Pokemon
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Pokemon.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Pokemon;
    })();

    pokemon.PokemonListItem = (function() {

        /**
         * Properties of a PokemonListItem.
         * @memberof pokemon
         * @interface IPokemonListItem
         * @property {string|null} [name] PokemonListItem name
         * @property {string|null} [url] PokemonListItem url
         */

        /**
         * Constructs a new PokemonListItem.
         * @memberof pokemon
         * @classdesc Represents a PokemonListItem.
         * @implements IPokemonListItem
         * @constructor
         * @param {pokemon.IPokemonListItem=} [properties] Properties to set
         */
        function PokemonListItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PokemonListItem name.
         * @member {string} name
         * @memberof pokemon.PokemonListItem
         * @instance
         */
        PokemonListItem.prototype.name = "";

        /**
         * PokemonListItem url.
         * @member {string} url
         * @memberof pokemon.PokemonListItem
         * @instance
         */
        PokemonListItem.prototype.url = "";

        /**
         * Creates a new PokemonListItem instance using the specified properties.
         * @function create
         * @memberof pokemon.PokemonListItem
         * @static
         * @param {pokemon.IPokemonListItem=} [properties] Properties to set
         * @returns {pokemon.PokemonListItem} PokemonListItem instance
         */
        PokemonListItem.create = function create(properties) {
            return new PokemonListItem(properties);
        };

        /**
         * Encodes the specified PokemonListItem message. Does not implicitly {@link pokemon.PokemonListItem.verify|verify} messages.
         * @function encode
         * @memberof pokemon.PokemonListItem
         * @static
         * @param {pokemon.IPokemonListItem} message PokemonListItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PokemonListItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
            return writer;
        };

        /**
         * Encodes the specified PokemonListItem message, length delimited. Does not implicitly {@link pokemon.PokemonListItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pokemon.PokemonListItem
         * @static
         * @param {pokemon.IPokemonListItem} message PokemonListItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PokemonListItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PokemonListItem message from the specified reader or buffer.
         * @function decode
         * @memberof pokemon.PokemonListItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pokemon.PokemonListItem} PokemonListItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PokemonListItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pokemon.PokemonListItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PokemonListItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pokemon.PokemonListItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pokemon.PokemonListItem} PokemonListItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PokemonListItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PokemonListItem message.
         * @function verify
         * @memberof pokemon.PokemonListItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PokemonListItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            return null;
        };

        /**
         * Creates a PokemonListItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pokemon.PokemonListItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pokemon.PokemonListItem} PokemonListItem
         */
        PokemonListItem.fromObject = function fromObject(object) {
            if (object instanceof $root.pokemon.PokemonListItem)
                return object;
            var message = new $root.pokemon.PokemonListItem();
            if (object.name != null)
                message.name = String(object.name);
            if (object.url != null)
                message.url = String(object.url);
            return message;
        };

        /**
         * Creates a plain object from a PokemonListItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pokemon.PokemonListItem
         * @static
         * @param {pokemon.PokemonListItem} message PokemonListItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PokemonListItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.url = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            return object;
        };

        /**
         * Converts this PokemonListItem to JSON.
         * @function toJSON
         * @memberof pokemon.PokemonListItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PokemonListItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PokemonListItem;
    })();

    return pokemon;
})();

module.exports = $root;
