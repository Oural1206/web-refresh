//
//  SafariExtensionViewController.swift
//  web refresh Extension
//
//  Created by Jules Jardri on 14/04/2022.
//  Copyright © 2022 Oural_1206. All rights reserved.
//

import SafariServices

class SafariExtensionViewController: SFSafariExtensionViewController {
    
    static let shared: SafariExtensionViewController = {
        let shared = SafariExtensionViewController()
        shared.preferredContentSize = NSSize(width:320, height:240)
        return shared
    }()

}
