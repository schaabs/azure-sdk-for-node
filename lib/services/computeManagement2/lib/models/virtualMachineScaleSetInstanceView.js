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
 * @class
 * Initializes a new instance of the VirtualMachineScaleSetInstanceView class.
 * @constructor
 * The instance view of a virtual machine scale set.
 *
 * @member {object} [virtualMachine] The instance view status summary for the
 * virtual machine scale set.
 *
 * @member {array} [virtualMachine.statusesSummary] The extensions information.
 *
 * @member {array} [extensions] The extensions information.
 *
 * @member {array} [statuses] The resource status information.
 *
 */
class VirtualMachineScaleSetInstanceView {
  constructor() {
  }

  /**
   * Defines the metadata of VirtualMachineScaleSetInstanceView
   *
   * @returns {object} metadata of VirtualMachineScaleSetInstanceView
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VirtualMachineScaleSetInstanceView',
      type: {
        name: 'Composite',
        className: 'VirtualMachineScaleSetInstanceView',
        modelProperties: {
          virtualMachine: {
            required: false,
            readOnly: true,
            serializedName: 'virtualMachine',
            type: {
              name: 'Composite',
              className: 'VirtualMachineScaleSetInstanceViewStatusesSummary'
            }
          },
          extensions: {
            required: false,
            readOnly: true,
            serializedName: 'extensions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'VirtualMachineScaleSetVMExtensionsSummaryElementType',
                  type: {
                    name: 'Composite',
                    className: 'VirtualMachineScaleSetVMExtensionsSummary'
                  }
              }
            }
          },
          statuses: {
            required: false,
            serializedName: 'statuses',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'InstanceViewStatusElementType',
                  type: {
                    name: 'Composite',
                    className: 'InstanceViewStatus'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = VirtualMachineScaleSetInstanceView;
