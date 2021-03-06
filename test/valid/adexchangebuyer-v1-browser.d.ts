// Type definitions for Google Ad Exchange Buyer API v1
// Project: https://developers.google.com/ad-exchange/buyer-rest
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

// OAuth2 scopes
// https://www.googleapis.com/auth/adexchange.buyer
//   Manage your Ad Exchange buyer account configuration

/// <reference path="./googleapis-browser-common.d.ts" />

declare module gapi.client {
    /**
     * Accesses your bidding-account information, submits creatives for validation, finds available direct deals, and retrieves performance reports.
     */
    module adexchangebuyer {
        var accounts: {
            /**
             * Gets one account by ID.
             * @params {number} id The account id
             */
            get: (params: {
                id: number;
            }) => {
                execute(callback: (data: IResponse<IAccount>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IAccount>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAccount>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAccount>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAccount>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAccount>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAccount>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Retrieves the authenticated user's list of accounts.
             */
            list: (params: {
            }) => {
                execute(callback: (data: IResponse<IAccountsList>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IAccountsList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAccountsList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAccountsList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAccountsList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAccountsList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAccountsList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Updates an existing account. This method supports patch semantics.
             * @params {number} id The account id
             */
            patch: (params: {
                id: number;
                resource?: IAccount;
            }) => {
                execute(callback: (data: IResponse<IAccount>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IAccount>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAccount>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAccount>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAccount>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAccount>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAccount>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Updates an existing account.
             * @params {number} id The account id
             */
            update: (params: {
                id: number;
                resource?: IAccount;
            }) => {
                execute(callback: (data: IResponse<IAccount>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IAccount>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAccount>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAccount>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAccount>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAccount>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAccount>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        var creatives: {
            /**
             * Gets the status for a single creative.
             * @params {number} accountId The id for the account that will serve this creative.
             * @params {string} adgroupId The adgroup this creative belongs to.
             * @params {string} buyerCreativeId The buyer-specific id for this creative.
             */
            get: (params: {
                accountId: number;
                adgroupId: string;
                buyerCreativeId: string;
            }) => {
                execute(callback: (data: IResponse<ICreative>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<ICreative>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICreative>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICreative>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICreative>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICreative>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICreative>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Submit a new creative.
             */
            insert: (params: {
                resource?: ICreative;
            }) => {
                execute(callback: (data: IResponse<ICreative>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<ICreative>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICreative>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICreative>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICreative>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICreative>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICreative>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Retrieves a list of the authenticated user's active creatives.
             * @params {number} maxResults Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
             * @params {string} pageToken A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
             */
            list: (params: {
                maxResults?: number;
                pageToken?: string;
            }) => {
                execute(callback: (data: IResponse<ICreativesList>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<ICreativesList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICreativesList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICreativesList>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICreativesList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICreativesList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICreativesList>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        /**
         * Configuration data for an Ad Exchange buyer account.
         */
        interface IAccount {
            /**
             * Your bidder locations that have distinct URLs.
             */
            bidderLocation: {
                maximumQps: number; // int32
                url: string;
            }[];
            /**
             * The nid parameter value used in cookie match requests. Please contact your technical account manager if you need to change this.
             */
            cookieMatchingNid: string;
            /**
             * The base URL used in cookie match requests.
             */
            cookieMatchingUrl: string;
            /**
             * Account id.
             */
            id: number; // int32
            /**
             * Resource type.
             */
            kind: string;
            /**
             * The sum of all bidderLocation.maximumQps values cannot exceed this. Please contact your technical account manager if you need to change this.
             */
            maximumTotalQps: number; // int32
        }
        /**
         * An account feed lists Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single buyer account.
         */
        interface IAccountsList {
            /**
             * A list of accounts.
             */
            items: IAccount[];
            /**
             * Resource type.
             */
            kind: string;
        }
        /**
         * A creative and its classification data.
         */
        interface ICreative {
            /**
             * The HTML snippet that displays the ad when inserted in the web page. If set, videoURL should not be set.
             */
            HTMLSnippet: string;
            /**
             * Account id.
             */
            accountId: number; // int32
            /**
             * The pretargeting adgroup id that this creative will be associated with.
             */
            adgroupId: string; // int64
            /**
             * Detected advertiser id, if any. Read-only. This field should not be set in requests.
             */
            advertiserId: string /* int64 */ [];
            /**
             * The name of the company being advertised in the creative.
             */
            advertiserName: string;
            /**
             * All attributes for the ads that may be shown from this snippet.
             */
            attribute: number /* int32 */ [];
            /**
             * A buyer-specific id identifying the creative in this ad.
             */
            buyerCreativeId: string;
            /**
             * The set of destination urls for the snippet.
             */
            clickThroughUrl: string[];
            /**
             * The reason for disapproval, if any. Note that not all disapproval reasons may be categorized, so it is possible for the creative to have a status of DISAPPROVED with an empty list for disapproval_reasons. In this case, please reach out to your TAM to help debug the issue. Read-only. This field should not be set in requests.
             */
            disapprovalReasons: string[];
            /**
             * Ad height.
             */
            height: number; // int32
            /**
             * Resource type.
             */
            kind: string;
            /**
             * Detected product categories, if any. Read-only. This field should not be set in requests.
             */
            productCategories: number /* int32 */ [];
            /**
             * All restricted categories for the ads that may be shown from this snippet.
             */
            restrictedCategories: number /* int32 */ [];
            /**
             * Detected sensitive categories, if any. Read-only. This field should not be set in requests.
             */
            sensitiveCategories: number /* int32 */ [];
            /**
             * Creative serving status. Read-only. This field should not be set in requests.
             */
            status: string;
            /**
             * All vendor types for the ads that may be shown from this snippet.
             */
            vendorType: number /* int32 */ [];
            /**
             * The url to fetch a video ad. If set, HTMLSnippet should not be set.
             */
            videoURL: string;
            /**
             * Ad width.
             */
            width: number; // int32
        }
        /**
         * The creatives feed lists the active creatives for the Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single creative.
         */
        interface ICreativesList {
            /**
             * A list of creatives.
             */
            items: ICreative[];
            /**
             * Resource type.
             */
            kind: string;
            /**
             * Continuation token used to page through creatives. To retrieve the next page of results, set the next request's "pageToken" value to this.
             */
            nextPageToken: string;
        }
    }
}
