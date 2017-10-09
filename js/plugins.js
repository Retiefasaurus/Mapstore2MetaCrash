/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
    plugins: {
        MapPlugin: require('../MapStore2/web/client/plugins/Map'),
        // HomePlugin: require('../MapStore2/web/client/plugins/Home')
        ZoomAllPlugin: require('../MapStore2/web/client/plugins/ZoomAll'),
        ZoomInPlugin: require('../MapStore2/web/client/plugins/ZoomIn'),
        ZoomOutPlugin: require('../MapStore2/web/client/plugins/ZoomOut'),
        SearchPlugin: require('../MapStore2/web/client/plugins/Search'),
        ToolbarPlugin: require('../MapStore2/web/client/plugins/Toolbar'),
        DrawerMenuPlugin: require('../MapStore2/web/client/plugins/DrawerMenu'),
        BurgerMenuPlugin: require('../MapStore2/web/client/plugins/BurgerMenu'),
        OmniBarPlugin: require('../MapStore2/web/client/plugins/OmniBar'),
        LocatePlugin: require('../MapStore2/web/client/plugins/Locate'),
        IdentifyPlugin: require('../MapStore2/web/client/plugins/Identify'),
        TOCPlugin: require('../MapStore2/web/client/plugins/TOC'),
        BackgroundSwitcherPlugin: require('../MapStore2/web/client/plugins/BackgroundSwitcher'),
        BackgroundSelectorPlugin: require('../MapStore2/web/client/plugins/BackgroundSelector'),
        MeasurePlugin: require('../MapStore2/web/client/plugins/Measure'),
        FullScreenPlugin: require('../MapStore2/web/client/plugins/FullScreen'),
        MetadataExplorerPlugin: require('../MapStore2/web/client/plugins/MetadataExplorer'),
        SearchServicesConfigPlugin: require('../MapStore2/web/client/plugins/SearchServicesConfig')
    },
    requires: {}
};
