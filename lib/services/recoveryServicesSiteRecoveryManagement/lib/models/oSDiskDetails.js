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

/**
 * Details of the OS Disk.
 *
 */
class OSDiskDetails {
  /**
   * Create a OSDiskDetails.
   * @member {string} [osVhdId] The id of the disk containing the OS.
   * @member {string} [osType] The type of the OS on the VM.
   * @member {string} [vhdName] The OS disk VHD name.
   */
  constructor() {
  }

  /**
   * Defines the metadata of OSDiskDetails
   *
   * @returns {object} metadata of OSDiskDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OSDiskDetails',
      type: {
        name: 'Composite',
        className: 'OSDiskDetails',
        modelProperties: {
          osVhdId: {
            required: false,
            serializedName: 'osVhdId',
            type: {
              name: 'String'
            }
          },
          osType: {
            required: false,
            serializedName: 'osType',
            type: {
              name: 'String'
            }
          },
          vhdName: {
            required: false,
            serializedName: 'vhdName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = OSDiskDetails;