/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Country details.
 *
 */
class AvailableProvidersListCountry {
  /**
   * Create a AvailableProvidersListCountry.
   * @member {string} [countryName] The country name.
   * @member {array} [providers] A list of Internet service providers.
   * @member {array} [states] List of available states in the country.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AvailableProvidersListCountry
   *
   * @returns {object} metadata of AvailableProvidersListCountry
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AvailableProvidersListCountry',
      type: {
        name: 'Composite',
        className: 'AvailableProvidersListCountry',
        modelProperties: {
          countryName: {
            required: false,
            serializedName: 'countryName',
            type: {
              name: 'String'
            }
          },
          providers: {
            required: false,
            serializedName: 'providers',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          states: {
            required: false,
            serializedName: 'states',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AvailableProvidersListStateElementType',
                  type: {
                    name: 'Composite',
                    className: 'AvailableProvidersListState'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = AvailableProvidersListCountry;