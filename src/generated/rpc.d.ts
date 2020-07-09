import * as $protobuf from "protobufjs";
/** Namespace pokemon. */
export namespace pokemon {

    /** Represents a PokemonService */
    class PokemonService extends $protobuf.rpc.Service {

        /**
         * Constructs a new PokemonService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new PokemonService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): PokemonService;

        /**
         * Calls FindAll.
         * @param request FindAllParams message or plain object
         * @param callback Node-style callback called with the error, if any, and PokemonArrayResponse
         */
        public findAll(request: pokemon.IFindAllParams, callback: pokemon.PokemonService.FindAllCallback): void;

        /**
         * Calls FindAll.
         * @param request FindAllParams message or plain object
         * @returns Promise
         */
        public findAll(request: pokemon.IFindAllParams): Promise<pokemon.PokemonArrayResponse>;

        /**
         * Calls FindOne.
         * @param request PokemonById message or plain object
         * @param callback Node-style callback called with the error, if any, and Pokemon
         */
        public findOne(request: pokemon.IPokemonById, callback: pokemon.PokemonService.FindOneCallback): void;

        /**
         * Calls FindOne.
         * @param request PokemonById message or plain object
         * @returns Promise
         */
        public findOne(request: pokemon.IPokemonById): Promise<pokemon.Pokemon>;
    }

    namespace PokemonService {

        /**
         * Callback as used by {@link pokemon.PokemonService#findAll}.
         * @param error Error, if any
         * @param [response] PokemonArrayResponse
         */
        type FindAllCallback = (error: (Error|null), response?: pokemon.PokemonArrayResponse) => void;

        /**
         * Callback as used by {@link pokemon.PokemonService#findOne}.
         * @param error Error, if any
         * @param [response] Pokemon
         */
        type FindOneCallback = (error: (Error|null), response?: pokemon.Pokemon) => void;
    }

    /** Properties of a FindAllParams. */
    interface IFindAllParams {
    }

    /** Represents a FindAllParams. */
    class FindAllParams implements IFindAllParams {

        /**
         * Constructs a new FindAllParams.
         * @param [properties] Properties to set
         */
        constructor(properties?: pokemon.IFindAllParams);

        /**
         * Creates a new FindAllParams instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FindAllParams instance
         */
        public static create(properties?: pokemon.IFindAllParams): pokemon.FindAllParams;

        /**
         * Encodes the specified FindAllParams message. Does not implicitly {@link pokemon.FindAllParams.verify|verify} messages.
         * @param message FindAllParams message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pokemon.IFindAllParams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FindAllParams message, length delimited. Does not implicitly {@link pokemon.FindAllParams.verify|verify} messages.
         * @param message FindAllParams message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pokemon.IFindAllParams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FindAllParams message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FindAllParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pokemon.FindAllParams;

        /**
         * Decodes a FindAllParams message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FindAllParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pokemon.FindAllParams;

        /**
         * Verifies a FindAllParams message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FindAllParams message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FindAllParams
         */
        public static fromObject(object: { [k: string]: any }): pokemon.FindAllParams;

        /**
         * Creates a plain object from a FindAllParams message. Also converts values to other types if specified.
         * @param message FindAllParams
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pokemon.FindAllParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FindAllParams to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PokemonArrayResponse. */
    interface IPokemonArrayResponse {

        /** PokemonArrayResponse pokemon */
        pokemon?: (pokemon.IPokemonListItem[]|null);
    }

    /** Represents a PokemonArrayResponse. */
    class PokemonArrayResponse implements IPokemonArrayResponse {

        /**
         * Constructs a new PokemonArrayResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: pokemon.IPokemonArrayResponse);

        /** PokemonArrayResponse pokemon. */
        public pokemon: pokemon.IPokemonListItem[];

        /**
         * Creates a new PokemonArrayResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PokemonArrayResponse instance
         */
        public static create(properties?: pokemon.IPokemonArrayResponse): pokemon.PokemonArrayResponse;

        /**
         * Encodes the specified PokemonArrayResponse message. Does not implicitly {@link pokemon.PokemonArrayResponse.verify|verify} messages.
         * @param message PokemonArrayResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pokemon.IPokemonArrayResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PokemonArrayResponse message, length delimited. Does not implicitly {@link pokemon.PokemonArrayResponse.verify|verify} messages.
         * @param message PokemonArrayResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pokemon.IPokemonArrayResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PokemonArrayResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PokemonArrayResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pokemon.PokemonArrayResponse;

        /**
         * Decodes a PokemonArrayResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PokemonArrayResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pokemon.PokemonArrayResponse;

        /**
         * Verifies a PokemonArrayResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PokemonArrayResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PokemonArrayResponse
         */
        public static fromObject(object: { [k: string]: any }): pokemon.PokemonArrayResponse;

        /**
         * Creates a plain object from a PokemonArrayResponse message. Also converts values to other types if specified.
         * @param message PokemonArrayResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pokemon.PokemonArrayResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PokemonArrayResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PokemonById. */
    interface IPokemonById {

        /** PokemonById id */
        id?: (number|null);
    }

    /** Represents a PokemonById. */
    class PokemonById implements IPokemonById {

        /**
         * Constructs a new PokemonById.
         * @param [properties] Properties to set
         */
        constructor(properties?: pokemon.IPokemonById);

        /** PokemonById id. */
        public id: number;

        /**
         * Creates a new PokemonById instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PokemonById instance
         */
        public static create(properties?: pokemon.IPokemonById): pokemon.PokemonById;

        /**
         * Encodes the specified PokemonById message. Does not implicitly {@link pokemon.PokemonById.verify|verify} messages.
         * @param message PokemonById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pokemon.IPokemonById, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PokemonById message, length delimited. Does not implicitly {@link pokemon.PokemonById.verify|verify} messages.
         * @param message PokemonById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pokemon.IPokemonById, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PokemonById message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PokemonById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pokemon.PokemonById;

        /**
         * Decodes a PokemonById message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PokemonById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pokemon.PokemonById;

        /**
         * Verifies a PokemonById message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PokemonById message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PokemonById
         */
        public static fromObject(object: { [k: string]: any }): pokemon.PokemonById;

        /**
         * Creates a plain object from a PokemonById message. Also converts values to other types if specified.
         * @param message PokemonById
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pokemon.PokemonById, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PokemonById to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Pokemon. */
    interface IPokemon {

        /** Pokemon id */
        id?: (number|null);

        /** Pokemon name */
        name?: (string|null);
    }

    /** Represents a Pokemon. */
    class Pokemon implements IPokemon {

        /**
         * Constructs a new Pokemon.
         * @param [properties] Properties to set
         */
        constructor(properties?: pokemon.IPokemon);

        /** Pokemon id. */
        public id: number;

        /** Pokemon name. */
        public name: string;

        /**
         * Creates a new Pokemon instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Pokemon instance
         */
        public static create(properties?: pokemon.IPokemon): pokemon.Pokemon;

        /**
         * Encodes the specified Pokemon message. Does not implicitly {@link pokemon.Pokemon.verify|verify} messages.
         * @param message Pokemon message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pokemon.IPokemon, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Pokemon message, length delimited. Does not implicitly {@link pokemon.Pokemon.verify|verify} messages.
         * @param message Pokemon message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pokemon.IPokemon, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Pokemon message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Pokemon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pokemon.Pokemon;

        /**
         * Decodes a Pokemon message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Pokemon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pokemon.Pokemon;

        /**
         * Verifies a Pokemon message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Pokemon message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Pokemon
         */
        public static fromObject(object: { [k: string]: any }): pokemon.Pokemon;

        /**
         * Creates a plain object from a Pokemon message. Also converts values to other types if specified.
         * @param message Pokemon
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pokemon.Pokemon, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Pokemon to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PokemonListItem. */
    interface IPokemonListItem {

        /** PokemonListItem name */
        name?: (string|null);

        /** PokemonListItem url */
        url?: (string|null);
    }

    /** Represents a PokemonListItem. */
    class PokemonListItem implements IPokemonListItem {

        /**
         * Constructs a new PokemonListItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: pokemon.IPokemonListItem);

        /** PokemonListItem name. */
        public name: string;

        /** PokemonListItem url. */
        public url: string;

        /**
         * Creates a new PokemonListItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PokemonListItem instance
         */
        public static create(properties?: pokemon.IPokemonListItem): pokemon.PokemonListItem;

        /**
         * Encodes the specified PokemonListItem message. Does not implicitly {@link pokemon.PokemonListItem.verify|verify} messages.
         * @param message PokemonListItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pokemon.IPokemonListItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PokemonListItem message, length delimited. Does not implicitly {@link pokemon.PokemonListItem.verify|verify} messages.
         * @param message PokemonListItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pokemon.IPokemonListItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PokemonListItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PokemonListItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pokemon.PokemonListItem;

        /**
         * Decodes a PokemonListItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PokemonListItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pokemon.PokemonListItem;

        /**
         * Verifies a PokemonListItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PokemonListItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PokemonListItem
         */
        public static fromObject(object: { [k: string]: any }): pokemon.PokemonListItem;

        /**
         * Creates a plain object from a PokemonListItem message. Also converts values to other types if specified.
         * @param message PokemonListItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pokemon.PokemonListItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PokemonListItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
