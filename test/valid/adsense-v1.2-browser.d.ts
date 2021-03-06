// Type definitions for Google AdSense Management API v1.2
// Project: https://developers.google.com/adsense/management/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

// OAuth2 scopes
// https://www.googleapis.com/auth/adsense
//   View and manage your AdSense data
// https://www.googleapis.com/auth/adsense.readonly
//   View your AdSense data

/// <reference path="./googleapis-browser-common.d.ts" />

declare module gapi.client {
    /**
     * Gives AdSense publishers access to their inventory and the ability to generate reports
     */
    module adsense {
        var accounts: {
            /**
             * Get information about the selected AdSense account.
             * @params {string} accountId Account to get information about.
             * @params {boolean} tree Whether the tree of sub accounts should be returned.
             */
            get: (params: {
                accountId: string;
                tree?: boolean;
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
             * List all accounts available to this AdSense account.
             * @params {number} maxResults The maximum number of accounts to include in the response, used for paging.
             * @params {string} pageToken A continuation token, used to page through accounts. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
             */
            list: (params: {
                maxResults?: number;
                pageToken?: string;
            }) => {
                execute(callback: (data: IResponse<IAccounts>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IAccounts>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAccounts>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAccounts>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAccounts>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAccounts>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAccounts>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            adclients: {
                /**
                 * List all ad clients in the specified account.
                 * @params {string} accountId Account for which to list ad clients.
                 * @params {number} maxResults The maximum number of ad clients to include in the response, used for paging.
                 * @params {string} pageToken A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
                 */
                list: (params: {
                    accountId: string;
                    maxResults?: number;
                    pageToken?: string;
                }) => {
                    execute(callback: (data: IResponse<IAdClients>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdClients>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdClients>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdClients>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdClients>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdClients>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdClients>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
            };
            adunits: {
                /**
                 * Gets the specified ad unit in the specified ad client for the specified account.
                 * @params {string} accountId Account to which the ad client belongs.
                 * @params {string} adClientId Ad client for which to get the ad unit.
                 * @params {string} adUnitId Ad unit to retrieve.
                 */
                get: (params: {
                    accountId: string;
                    adClientId: string;
                    adUnitId: string;
                }) => {
                    execute(callback: (data: IResponse<IAdUnit>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdUnit>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdUnit>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdUnit>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdUnit>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdUnit>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdUnit>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
                /**
                 * List all ad units in the specified ad client for the specified account.
                 * @params {string} accountId Account to which the ad client belongs.
                 * @params {string} adClientId Ad client for which to list ad units.
                 * @params {boolean} includeInactive Whether to include inactive ad units. Default: true.
                 * @params {number} maxResults The maximum number of ad units to include in the response, used for paging.
                 * @params {string} pageToken A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
                 */
                list: (params: {
                    accountId: string;
                    adClientId: string;
                    includeInactive?: boolean;
                    maxResults?: number;
                    pageToken?: string;
                }) => {
                    execute(callback: (data: IResponse<IAdUnits>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdUnits>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdUnits>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdUnits>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdUnits>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdUnits>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdUnits>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
                customchannels: {
                    /**
                     * List all custom channels which the specified ad unit belongs to.
                     * @params {string} accountId Account to which the ad client belongs.
                     * @params {string} adClientId Ad client which contains the ad unit.
                     * @params {string} adUnitId Ad unit for which to list custom channels.
                     * @params {number} maxResults The maximum number of custom channels to include in the response, used for paging.
                     * @params {string} pageToken A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
                     */
                    list: (params: {
                        accountId: string;
                        adClientId: string;
                        adUnitId: string;
                        maxResults?: number;
                        pageToken?: string;
                    }) => {
                        execute(callback: (data: IResponse<ICustomChannels>, original: string) => void):void;
                        then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannels>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                        then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannels>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                        then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannels>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                        then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannels>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                        then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannels>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                        then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannels>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    };
                };
            };
            customchannels: {
                /**
                 * Get the specified custom channel from the specified ad client for the specified account.
                 * @params {string} accountId Account to which the ad client belongs.
                 * @params {string} adClientId Ad client which contains the custom channel.
                 * @params {string} customChannelId Custom channel to retrieve.
                 */
                get: (params: {
                    accountId: string;
                    adClientId: string;
                    customChannelId: string;
                }) => {
                    execute(callback: (data: IResponse<ICustomChannel>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannel>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannel>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannel>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannel>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannel>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannel>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
                /**
                 * List all custom channels in the specified ad client for the specified account.
                 * @params {string} accountId Account to which the ad client belongs.
                 * @params {string} adClientId Ad client for which to list custom channels.
                 * @params {number} maxResults The maximum number of custom channels to include in the response, used for paging.
                 * @params {string} pageToken A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
                 */
                list: (params: {
                    accountId: string;
                    adClientId: string;
                    maxResults?: number;
                    pageToken?: string;
                }) => {
                    execute(callback: (data: IResponse<ICustomChannels>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannels>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannels>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannels>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannels>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannels>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannels>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
                adunits: {
                    /**
                     * List all ad units in the specified custom channel.
                     * @params {string} accountId Account to which the ad client belongs.
                     * @params {string} adClientId Ad client which contains the custom channel.
                     * @params {string} customChannelId Custom channel for which to list ad units.
                     * @params {boolean} includeInactive Whether to include inactive ad units. Default: true.
                     * @params {number} maxResults The maximum number of ad units to include in the response, used for paging.
                     * @params {string} pageToken A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
                     */
                    list: (params: {
                        accountId: string;
                        adClientId: string;
                        customChannelId: string;
                        includeInactive?: boolean;
                        maxResults?: number;
                        pageToken?: string;
                    }) => {
                        execute(callback: (data: IResponse<IAdUnits>, original: string) => void):void;
                        then<U>(onFulfilled: (response: IPromiseResponse<IAdUnits>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                        then<U>(onFulfilled: (response: IPromiseResponse<IAdUnits>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                        then<U>(onFulfilled: (response: IPromiseResponse<IAdUnits>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                        then<U>(onFulfilled: (response: IPromiseResponse<IAdUnits>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                        then<U>(onFulfilled: (response: IPromiseResponse<IAdUnits>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                        then<U>(onFulfilled: (response: IPromiseResponse<IAdUnits>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    };
                };
            };
            reports: {
                /**
                 * Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
                 * @params {string} accountId Account upon which to report.
                 * @params {string} currency Optional currency to use when reporting on monetary metrics. Defaults to the account's currency if not set.
                 * @params {string} dimension Dimensions to base the report on.
                 * @params {string} endDate End of the date range to report on in "YYYY-MM-DD" format, inclusive.
                 * @params {string} filter Filters to be run on the report.
                 * @params {string} locale Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
                 * @params {number} maxResults The maximum number of rows of report data to return.
                 * @params {string} metric Numeric columns to include in the report.
                 * @params {string} sort The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
                 * @params {string} startDate Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
                 * @params {number} startIndex Index of the first row of report data to return.
                 */
                generate: (params: {
                    accountId: string;
                    currency?: string;
                    dimension?: string;
                    endDate: string;
                    filter?: string;
                    locale?: string;
                    maxResults?: number;
                    metric?: string;
                    sort?: string;
                    startDate: string;
                    startIndex?: number;
                }) => {
                    execute(callback: (data: IResponse<IAdsenseReportsGenerateResponse>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdsenseReportsGenerateResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdsenseReportsGenerateResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdsenseReportsGenerateResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdsenseReportsGenerateResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdsenseReportsGenerateResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdsenseReportsGenerateResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
                saved: {
                    /**
                     * Generate an AdSense report based on the saved report ID sent in the query parameters.
                     * @params {string} accountId Account to which the saved reports belong.
                     * @params {string} locale Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
                     * @params {number} maxResults The maximum number of rows of report data to return.
                     * @params {string} savedReportId The saved report to retrieve.
                     * @params {number} startIndex Index of the first row of report data to return.
                     */
                    generate: (params: {
                        accountId: string;
                        locale?: string;
                        maxResults?: number;
                        savedReportId: string;
                        startIndex?: number;
                    }) => {
                        execute(callback: (data: IResponse<IAdsenseReportsGenerateResponse>, original: string) => void):void;
                        then<U>(onFulfilled: (response: IPromiseResponse<IAdsenseReportsGenerateResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                        then<U>(onFulfilled: (response: IPromiseResponse<IAdsenseReportsGenerateResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                        then<U>(onFulfilled: (response: IPromiseResponse<IAdsenseReportsGenerateResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                        then<U>(onFulfilled: (response: IPromiseResponse<IAdsenseReportsGenerateResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                        then<U>(onFulfilled: (response: IPromiseResponse<IAdsenseReportsGenerateResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                        then<U>(onFulfilled: (response: IPromiseResponse<IAdsenseReportsGenerateResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    };
                    /**
                     * List all saved reports in the specified AdSense account.
                     * @params {string} accountId Account to which the saved reports belong.
                     * @params {number} maxResults The maximum number of saved reports to include in the response, used for paging.
                     * @params {string} pageToken A continuation token, used to page through saved reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
                     */
                    list: (params: {
                        accountId: string;
                        maxResults?: number;
                        pageToken?: string;
                    }) => {
                        execute(callback: (data: IResponse<ISavedReports>, original: string) => void):void;
                        then<U>(onFulfilled: (response: IPromiseResponse<ISavedReports>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                        then<U>(onFulfilled: (response: IPromiseResponse<ISavedReports>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                        then<U>(onFulfilled: (response: IPromiseResponse<ISavedReports>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                        then<U>(onFulfilled: (response: IPromiseResponse<ISavedReports>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                        then<U>(onFulfilled: (response: IPromiseResponse<ISavedReports>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                        then<U>(onFulfilled: (response: IPromiseResponse<ISavedReports>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    };
                };
            };
            savedadstyles: {
                /**
                 * List a specific saved ad style for the specified account.
                 * @params {string} accountId Account for which to get the saved ad style.
                 * @params {string} savedAdStyleId Saved ad style to retrieve.
                 */
                get: (params: {
                    accountId: string;
                    savedAdStyleId: string;
                }) => {
                    execute(callback: (data: IResponse<ISavedAdStyle>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<ISavedAdStyle>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ISavedAdStyle>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ISavedAdStyle>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ISavedAdStyle>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ISavedAdStyle>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ISavedAdStyle>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
                /**
                 * List all saved ad styles in the specified account.
                 * @params {string} accountId Account for which to list saved ad styles.
                 * @params {number} maxResults The maximum number of saved ad styles to include in the response, used for paging.
                 * @params {string} pageToken A continuation token, used to page through saved ad styles. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
                 */
                list: (params: {
                    accountId: string;
                    maxResults?: number;
                    pageToken?: string;
                }) => {
                    execute(callback: (data: IResponse<ISavedAdStyles>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<ISavedAdStyles>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ISavedAdStyles>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ISavedAdStyles>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ISavedAdStyles>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ISavedAdStyles>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ISavedAdStyles>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
            };
            urlchannels: {
                /**
                 * List all URL channels in the specified ad client for the specified account.
                 * @params {string} accountId Account to which the ad client belongs.
                 * @params {string} adClientId Ad client for which to list URL channels.
                 * @params {number} maxResults The maximum number of URL channels to include in the response, used for paging.
                 * @params {string} pageToken A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
                 */
                list: (params: {
                    accountId: string;
                    adClientId: string;
                    maxResults?: number;
                    pageToken?: string;
                }) => {
                    execute(callback: (data: IResponse<IUrlChannels>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<IUrlChannels>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IUrlChannels>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IUrlChannels>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IUrlChannels>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IUrlChannels>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IUrlChannels>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
            };
        };
        var adclients: {
            /**
             * List all ad clients in this AdSense account.
             * @params {number} maxResults The maximum number of ad clients to include in the response, used for paging.
             * @params {string} pageToken A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
             */
            list: (params: {
                maxResults?: number;
                pageToken?: string;
            }) => {
                execute(callback: (data: IResponse<IAdClients>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IAdClients>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAdClients>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAdClients>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAdClients>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAdClients>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAdClients>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        var adunits: {
            /**
             * Gets the specified ad unit in the specified ad client.
             * @params {string} adClientId Ad client for which to get the ad unit.
             * @params {string} adUnitId Ad unit to retrieve.
             */
            get: (params: {
                adClientId: string;
                adUnitId: string;
            }) => {
                execute(callback: (data: IResponse<IAdUnit>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IAdUnit>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAdUnit>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAdUnit>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAdUnit>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAdUnit>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAdUnit>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * List all ad units in the specified ad client for this AdSense account.
             * @params {string} adClientId Ad client for which to list ad units.
             * @params {boolean} includeInactive Whether to include inactive ad units. Default: true.
             * @params {number} maxResults The maximum number of ad units to include in the response, used for paging.
             * @params {string} pageToken A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
             */
            list: (params: {
                adClientId: string;
                includeInactive?: boolean;
                maxResults?: number;
                pageToken?: string;
            }) => {
                execute(callback: (data: IResponse<IAdUnits>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IAdUnits>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAdUnits>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAdUnits>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAdUnits>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAdUnits>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAdUnits>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            customchannels: {
                /**
                 * List all custom channels which the specified ad unit belongs to.
                 * @params {string} adClientId Ad client which contains the ad unit.
                 * @params {string} adUnitId Ad unit for which to list custom channels.
                 * @params {number} maxResults The maximum number of custom channels to include in the response, used for paging.
                 * @params {string} pageToken A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
                 */
                list: (params: {
                    adClientId: string;
                    adUnitId: string;
                    maxResults?: number;
                    pageToken?: string;
                }) => {
                    execute(callback: (data: IResponse<ICustomChannels>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannels>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannels>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannels>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannels>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannels>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannels>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
            };
        };
        var customchannels: {
            /**
             * Get the specified custom channel from the specified ad client.
             * @params {string} adClientId Ad client which contains the custom channel.
             * @params {string} customChannelId Custom channel to retrieve.
             */
            get: (params: {
                adClientId: string;
                customChannelId: string;
            }) => {
                execute(callback: (data: IResponse<ICustomChannel>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannel>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannel>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannel>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannel>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannel>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannel>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * List all custom channels in the specified ad client for this AdSense account.
             * @params {string} adClientId Ad client for which to list custom channels.
             * @params {number} maxResults The maximum number of custom channels to include in the response, used for paging.
             * @params {string} pageToken A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
             */
            list: (params: {
                adClientId: string;
                maxResults?: number;
                pageToken?: string;
            }) => {
                execute(callback: (data: IResponse<ICustomChannels>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannels>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannels>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannels>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannels>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannels>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICustomChannels>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            adunits: {
                /**
                 * List all ad units in the specified custom channel.
                 * @params {string} adClientId Ad client which contains the custom channel.
                 * @params {string} customChannelId Custom channel for which to list ad units.
                 * @params {boolean} includeInactive Whether to include inactive ad units. Default: true.
                 * @params {number} maxResults The maximum number of ad units to include in the response, used for paging.
                 * @params {string} pageToken A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
                 */
                list: (params: {
                    adClientId: string;
                    customChannelId: string;
                    includeInactive?: boolean;
                    maxResults?: number;
                    pageToken?: string;
                }) => {
                    execute(callback: (data: IResponse<IAdUnits>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdUnits>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdUnits>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdUnits>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdUnits>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdUnits>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdUnits>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
            };
        };
        var reports: {
            /**
             * Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
             * @params {string} accountId Accounts upon which to report.
             * @params {string} currency Optional currency to use when reporting on monetary metrics. Defaults to the account's currency if not set.
             * @params {string} dimension Dimensions to base the report on.
             * @params {string} endDate End of the date range to report on in "YYYY-MM-DD" format, inclusive.
             * @params {string} filter Filters to be run on the report.
             * @params {string} locale Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
             * @params {number} maxResults The maximum number of rows of report data to return.
             * @params {string} metric Numeric columns to include in the report.
             * @params {string} sort The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
             * @params {string} startDate Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
             * @params {number} startIndex Index of the first row of report data to return.
             */
            generate: (params: {
                accountId?: string;
                currency?: string;
                dimension?: string;
                endDate: string;
                filter?: string;
                locale?: string;
                maxResults?: number;
                metric?: string;
                sort?: string;
                startDate: string;
                startIndex?: number;
            }) => {
                execute(callback: (data: IResponse<IAdsenseReportsGenerateResponse>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IAdsenseReportsGenerateResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAdsenseReportsGenerateResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAdsenseReportsGenerateResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAdsenseReportsGenerateResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAdsenseReportsGenerateResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IAdsenseReportsGenerateResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            saved: {
                /**
                 * Generate an AdSense report based on the saved report ID sent in the query parameters.
                 * @params {string} locale Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
                 * @params {number} maxResults The maximum number of rows of report data to return.
                 * @params {string} savedReportId The saved report to retrieve.
                 * @params {number} startIndex Index of the first row of report data to return.
                 */
                generate: (params: {
                    locale?: string;
                    maxResults?: number;
                    savedReportId: string;
                    startIndex?: number;
                }) => {
                    execute(callback: (data: IResponse<IAdsenseReportsGenerateResponse>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdsenseReportsGenerateResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdsenseReportsGenerateResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdsenseReportsGenerateResponse>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdsenseReportsGenerateResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdsenseReportsGenerateResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<IAdsenseReportsGenerateResponse>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
                /**
                 * List all saved reports in this AdSense account.
                 * @params {number} maxResults The maximum number of saved reports to include in the response, used for paging.
                 * @params {string} pageToken A continuation token, used to page through saved reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
                 */
                list: (params: {
                    maxResults?: number;
                    pageToken?: string;
                }) => {
                    execute(callback: (data: IResponse<ISavedReports>, original: string) => void):void;
                    then<U>(onFulfilled: (response: IPromiseResponse<ISavedReports>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ISavedReports>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ISavedReports>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ISavedReports>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ISavedReports>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                    then<U>(onFulfilled: (response: IPromiseResponse<ISavedReports>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                };
            };
        };
        var savedadstyles: {
            /**
             * Get a specific saved ad style from the user's account.
             * @params {string} savedAdStyleId Saved ad style to retrieve.
             */
            get: (params: {
                savedAdStyleId: string;
            }) => {
                execute(callback: (data: IResponse<ISavedAdStyle>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<ISavedAdStyle>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ISavedAdStyle>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ISavedAdStyle>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ISavedAdStyle>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ISavedAdStyle>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ISavedAdStyle>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * List all saved ad styles in the user's account.
             * @params {number} maxResults The maximum number of saved ad styles to include in the response, used for paging.
             * @params {string} pageToken A continuation token, used to page through saved ad styles. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
             */
            list: (params: {
                maxResults?: number;
                pageToken?: string;
            }) => {
                execute(callback: (data: IResponse<ISavedAdStyles>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<ISavedAdStyles>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ISavedAdStyles>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ISavedAdStyles>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ISavedAdStyles>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ISavedAdStyles>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ISavedAdStyles>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        var urlchannels: {
            /**
             * List all URL channels in the specified ad client for this AdSense account.
             * @params {string} adClientId Ad client for which to list URL channels.
             * @params {number} maxResults The maximum number of URL channels to include in the response, used for paging.
             * @params {string} pageToken A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
             */
            list: (params: {
                adClientId: string;
                maxResults?: number;
                pageToken?: string;
            }) => {
                execute(callback: (data: IResponse<IUrlChannels>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IUrlChannels>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IUrlChannels>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IUrlChannels>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IUrlChannels>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IUrlChannels>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IUrlChannels>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        interface IAccount {
            /**
             * Unique identifier of this account.
             */
            id: string;
            /**
             * Kind of resource this is, in this case adsense#account.
             */
            kind: string;
            /**
             * Name of this account.
             */
            name: string;
            /**
             * Whether this account is premium.
             */
            premium: boolean;
            /**
             * Sub accounts of the this account.
             */
            subAccounts: IAccount[];
        }
        interface IAccounts {
            /**
             * ETag of this response for caching purposes.
             */
            etag: string;
            /**
             * The accounts returned in this list response.
             */
            items: IAccount[];
            /**
             * Kind of list this is, in this case adsense#accounts.
             */
            kind: string;
            /**
             * Continuation token used to page through accounts. To retrieve the next page of results, set the next request's "pageToken" value to this.
             */
            nextPageToken: string;
        }
        interface IAdClient {
            /**
             * Whether this ad client is opted in to ARC.
             */
            arcOptIn: boolean;
            /**
             * Unique identifier of this ad client.
             */
            id: string;
            /**
             * Kind of resource this is, in this case adsense#adClient.
             */
            kind: string;
            /**
             * This ad client's product code, which corresponds to the PRODUCT_CODE report dimension.
             */
            productCode: string;
            /**
             * Whether this ad client supports being reported on.
             */
            supportsReporting: boolean;
        }
        interface IAdClients {
            /**
             * ETag of this response for caching purposes.
             */
            etag: string;
            /**
             * The ad clients returned in this list response.
             */
            items: IAdClient[];
            /**
             * Kind of list this is, in this case adsense#adClients.
             */
            kind: string;
            /**
             * Continuation token used to page through ad clients. To retrieve the next page of results, set the next request's "pageToken" value to this.
             */
            nextPageToken: string;
        }
        interface IAdStyle {
            /**
             * The colors which are included in the style. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash.
             */
            colors: {
                background: string;
                border: string;
                text: string;
                title: string;
                url: string;
            };
            /**
             * The style of the corners in the ad.
             */
            corners: string;
            /**
             * The font which is included in the style.
             */
            font: {
                family: string;
                size: string;
            };
            /**
             * Kind this is, in this case adsense#adStyle.
             */
            kind: string;
        }
        interface IAdUnit {
            /**
             * Identity code of this ad unit, not necessarily unique across ad clients.
             */
            code: string;
            /**
             * Settings specific to content ads (AFC) and highend mobile content ads (AFMC).
             */
            contentAdsSettings: {
                backupOption: {
                    color: string;
                    type: string;
                    url: string;
                };
                size: string;
                type: string;
            };
            /**
             * Custom style information specific to this ad unit.
             */
            customStyle: IAdStyle;
            /**
             * Settings specific to feed ads (AFF).
             */
            feedAdsSettings: {
                adPosition: string;
                frequency: number; // int32
                minimumWordCount: number; // int32
                type: string;
            };
            /**
             * Unique identifier of this ad unit. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
             */
            id: string;
            /**
             * Kind of resource this is, in this case adsense#adUnit.
             */
            kind: string;
            /**
             * Settings specific to WAP mobile content ads (AFMC).
             */
            mobileContentAdsSettings: {
                markupLanguage: string;
                scriptingLanguage: string;
                size: string;
                type: string;
            };
            /**
             * Name of this ad unit.
             */
            name: string;
            /**
             * ID of the saved ad style which holds this ad unit's style information.
             */
            savedStyleId: string;
            /**
             * Status of this ad unit. Possible values are:
             * NEW: Indicates that the ad unit was created within the last seven days and does not yet have any activity associated with it.
             * 
             * ACTIVE: Indicates that there has been activity on this ad unit in the last seven days.
             * 
             * INACTIVE: Indicates that there has been no activity on this ad unit in the last seven days.
             */
            status: string;
        }
        interface IAdUnits {
            /**
             * ETag of this response for caching purposes.
             */
            etag: string;
            /**
             * The ad units returned in this list response.
             */
            items: IAdUnit[];
            /**
             * Kind of list this is, in this case adsense#adUnits.
             */
            kind: string;
            /**
             * Continuation token used to page through ad units. To retrieve the next page of results, set the next request's "pageToken" value to this.
             */
            nextPageToken: string;
        }
        interface IAdsenseReportsGenerateResponse {
            /**
             * The averages of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.
             */
            averages: string[];
            /**
             * The header information of the columns requested in the report. This is a list of headers; one for each dimension in the request, followed by one for each metric in the request.
             */
            headers: {
                currency: string;
                name: string;
                type: string;
            }[];
            /**
             * Kind this is, in this case adsense#report.
             */
            kind: string;
            /**
             * The output rows of the report. Each row is a list of cells; one for each dimension in the request, followed by one for each metric in the request. The dimension cells contain strings, and the metric cells contain numbers.
             */
            rows: string[][];
            /**
             * The total number of rows matched by the report request. Fewer rows may be returned in the response due to being limited by the row count requested or the report row limit.
             */
            totalMatchedRows: string; // int64
            /**
             * The totals of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.
             */
            totals: string[];
            /**
             * Any warnings associated with generation of the report.
             */
            warnings: string[];
        }
        interface ICustomChannel {
            /**
             * Code of this custom channel, not necessarily unique across ad clients.
             */
            code: string;
            /**
             * Unique identifier of this custom channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
             */
            id: string;
            /**
             * Kind of resource this is, in this case adsense#customChannel.
             */
            kind: string;
            /**
             * Name of this custom channel.
             */
            name: string;
            /**
             * The targeting information of this custom channel, if activated.
             */
            targetingInfo: {
                adsAppearOn: string;
                description: string;
                location: string;
                siteLanguage: string;
            };
        }
        interface ICustomChannels {
            /**
             * ETag of this response for caching purposes.
             */
            etag: string;
            /**
             * The custom channels returned in this list response.
             */
            items: ICustomChannel[];
            /**
             * Kind of list this is, in this case adsense#customChannels.
             */
            kind: string;
            /**
             * Continuation token used to page through custom channels. To retrieve the next page of results, set the next request's "pageToken" value to this.
             */
            nextPageToken: string;
        }
        interface ISavedAdStyle {
            /**
             * The AdStyle itself.
             */
            adStyle: IAdStyle;
            /**
             * Unique identifier of this saved ad style. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
             */
            id: string;
            /**
             * Kind of resource this is, in this case adsense#savedAdStyle.
             */
            kind: string;
            /**
             * The user selected name of this SavedAdStyle.
             */
            name: string;
        }
        interface ISavedAdStyles {
            /**
             * ETag of this response for caching purposes.
             */
            etag: string;
            /**
             * The saved ad styles returned in this list response.
             */
            items: ISavedAdStyle[];
            /**
             * Kind of list this is, in this case adsense#savedAdStyles.
             */
            kind: string;
            /**
             * Continuation token used to page through ad units. To retrieve the next page of results, set the next request's "pageToken" value to this.
             */
            nextPageToken: string;
        }
        interface ISavedReport {
            /**
             * Unique identifier of this saved report.
             */
            id: string;
            /**
             * Kind of resource this is, in this case adsense#savedReport.
             */
            kind: string;
            /**
             * This saved report's name.
             */
            name: string;
        }
        interface ISavedReports {
            /**
             * ETag of this response for caching purposes.
             */
            etag: string;
            /**
             * The saved reports returned in this list response.
             */
            items: ISavedReport[];
            /**
             * Kind of list this is, in this case adsense#savedReports.
             */
            kind: string;
            /**
             * Continuation token used to page through saved reports. To retrieve the next page of results, set the next request's "pageToken" value to this.
             */
            nextPageToken: string;
        }
        interface IUrlChannel {
            /**
             * Unique identifier of this URL channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
             */
            id: string;
            /**
             * Kind of resource this is, in this case adsense#urlChannel.
             */
            kind: string;
            /**
             * URL Pattern of this URL channel. Does not include "http://" or "https://". Example: www.example.com/home
             */
            urlPattern: string;
        }
        interface IUrlChannels {
            /**
             * ETag of this response for caching purposes.
             */
            etag: string;
            /**
             * The URL channels returned in this list response.
             */
            items: IUrlChannel[];
            /**
             * Kind of list this is, in this case adsense#urlChannels.
             */
            kind: string;
            /**
             * Continuation token used to page through URL channels. To retrieve the next page of results, set the next request's "pageToken" value to this.
             */
            nextPageToken: string;
        }
    }
}
