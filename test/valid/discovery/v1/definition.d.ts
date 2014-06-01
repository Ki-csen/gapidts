declare module gapi.client {
    module discovery {
        var apis: {
            getRest: (params: {
                api: string;
                version: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IRestDescription
            list: (params: {
                name?: string;
                preferred?: boolean;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // IDirectoryList
        };
        interface IDirectoryList {
            discoveryVersion: string;
            items: {
                description: string;
                discoveryLink: string;
                discoveryRestUrl: string;
                documentationLink: string;
                icons: {
                    x16: string;
                    x32: string;
                };
                id: string;
                kind: string;
                labels: string[];
                name: string;
                preferred: boolean;
                title: string;
                version: string;
            }[];
            kind: string;
        }
        interface IJsonSchema {
            $ref: string;
            additionalProperties: IJsonSchema;
            annotations: {
                required: string[];
            };
            default: string;
            description: string;
            enum: string[];
            enumDescriptions: string[];
            format: string;
            id: string;
            items: IJsonSchema;
            location: string;
            maximum: string;
            minimum: string;
            pattern: string;
            properties: { [name:string]: IJsonSchema; };
            readOnly: boolean;
            repeated: boolean;
            required: boolean;
            type: string;
            variant: {
                discriminant: string;
                map: {
                    $ref: string;
                    type_value: string;
                }[];
            };
        }
        interface IRestDescription {
            auth: {
                oauth2: {
                    scopes: {
                        [name:string]: {
                            description: string;
                        };
                    };
                };
            };
            basePath: string;
            baseUrl: string;
            batchPath: string;
            canonicalName: string;
            description: string;
            discoveryVersion: string;
            documentationLink: string;
            etag: string;
            features: string[];
            icons: {
                x16: string;
                x32: string;
            };
            id: string;
            kind: string;
            labels: string[];
            methods: { [name:string]: IRestMethod; };
            name: string;
            ownerDomain: string;
            ownerName: string;
            packagePath: string;
            parameters: { [name:string]: IJsonSchema; };
            protocol: string;
            resources: { [name:string]: IRestResource; };
            revision: string;
            rootUrl: string;
            schemas: { [name:string]: IJsonSchema; };
            servicePath: string;
            title: string;
            version: string;
        }
        interface IRestMethod {
            description: string;
            etagRequired: boolean;
            httpMethod: string;
            id: string;
            mediaUpload: {
                accept: string[];
                maxSize: string;
                protocols: {
                    resumable: {
                        multipart: boolean;
                        path: string;
                    };
                    simple: {
                        multipart: boolean;
                        path: string;
                    };
                };
            };
            parameterOrder: string[];
            parameters: { [name:string]: IJsonSchema; };
            path: string;
            request: {
                $ref: string;
                parameterName: string;
            };
            response: {
                $ref: string;
            };
            scopes: string[];
            supportsMediaDownload: boolean;
            supportsMediaUpload: boolean;
            supportsSubscription: boolean;
        }
        interface IRestResource {
            methods: { [name:string]: IRestMethod; };
            resources: { [name:string]: IRestResource; };
        }
    }
}