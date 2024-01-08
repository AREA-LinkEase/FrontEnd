import React, { useCallback, useRef, useMemo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'
import Icon from 'src/@core/components/icon'
import MuiDrawer from '@mui/material/Drawer'
import { styled } from '@mui/material/styles'
import PerfectScrollbar from 'react-perfect-scrollbar'

import ReactFlow, {
    ReactFlowProvider,
    MiniMap,
    Controls,
    Background,
    BackgroundVariant,
    useEdgesState,
    addEdge,
    getSmoothStepPath,
    BaseEdge
  } from 'reactflow';

import StartBlock from 'src/@core/components/reactflowBlocks/markingBlock/startBlock';
import EndBlock from 'src/@core/components/reactflowBlocks/markingBlock/endBlock';
import IfBlock from 'src/@core/components/reactflowBlocks/controlBlocks/ifBlock';
import AtBlock from 'src/@core/components/reactflowBlocks/controlBlocks/atBlock';
import ForBlock from 'src/@core/components/reactflowBlocks/controlBlocks/forBlock';
import EqualBlock from 'src/@core/components/reactflowBlocks/comparaisonBlocks/equalBlock';
import NotEqualBlock from 'src/@core/components/reactflowBlocks/comparaisonBlocks/notEqualBlock';
import SuperiorBlock from 'src/@core/components/reactflowBlocks/comparaisonBlocks/superiorBlock';
import InferiorBlock from 'src/@core/components/reactflowBlocks/comparaisonBlocks/inferiorBlock';
import SuperiorOrEqualBlock from 'src/@core/components/reactflowBlocks/comparaisonBlocks/superiorOrEqualBlock';
import InferiorOrEqualBlock from 'src/@core/components/reactflowBlocks/comparaisonBlocks/inferiorOrEqualBlock';
import NumberBlock from 'src/@core/components/reactflowBlocks/stockageBlocks/numberBlock';
import BooleanBlock from 'src/@core/components/reactflowBlocks/stockageBlocks/booleanBlock';
import StringBlock from 'src/@core/components/reactflowBlocks/stockageBlocks/stringBlock';

import IfBlockIndicator from 'src/@core/components/reactflowBlocksIndicator/controlBlocks/ifBlockIndicator';
import ForBlockIndicator from 'src/@core/components/reactflowBlocksIndicator/controlBlocks/forBlockIndicator';
import StartBlockIndicator from 'src/@core/components/reactflowBlocksIndicator/markingBlocks';
import EndBlockIndicator from 'src/@core/components/reactflowBlocksIndicator/markingBlocks/endBlockIndicator';
import EqualBlockIndicator from 'src/@core/components/reactflowBlocksIndicator/comparaisonBlocks/equalBlock';
import NotEqualBlockIndicator from 'src/@core/components/reactflowBlocksIndicator/comparaisonBlocks/notEqualBlock';
import SuperiorBlockIndicator from 'src/@core/components/reactflowBlocksIndicator/comparaisonBlocks/superiorBlock';
import SuperiorOrEqualBlockIndicator from 'src/@core/components/reactflowBlocksIndicator/comparaisonBlocks/superiorOrEqualBlock';
import InferiorBlockIndicator from 'src/@core/components/reactflowBlocksIndicator/comparaisonBlocks/inferiorBlock';
import InferiorOrEqualBlockIndicator from 'src/@core/components/reactflowBlocksIndicator/comparaisonBlocks/inferiorOrEqualBlock';
import BooleanBlockIndicator from 'src/@core/components/reactflowBlocksIndicator/stockageBlocks/booleanBlock';
import NumberBlockIndicator from 'src/@core/components/reactflowBlocksIndicator/stockageBlocks/numberBlock';
import StringBlockIndicator from 'src/@core/components/reactflowBlocksIndicator/stockageBlocks/stringBlock';

import { setReduxNodes } from 'src/store/apps/nodes';
import { setReduxEdges, addReduxEdge, removeReduxEdge } from 'src/store/apps/edges';
import ForEachBlockIndicator from 'src/@core/components/reactflowBlocksIndicator/controlBlocks/forEachBlockIndicator';
import OnBlockIndicator from 'src/@core/components/reactflowBlocksIndicator/controlBlocks/onBlockIndicator';
import OnBlock from 'src/@core/components/reactflowBlocks/controlBlocks/onBlock';
import ForEachBlock from 'src/@core/components/reactflowBlocks/controlBlocks/forEachBlock';
import NumberToBoolBlock from 'src/@core/components/reactflowBlocks/conversionBlock/numberToBoolBlock';
import NumberToStringBlock from 'src/@core/components/reactflowBlocks/conversionBlock/numberToStringBlock';
import { getConnectedNodes, isComparaisonNode } from 'src/@core/layouts/utils';
import ArrayBlock from 'src/@core/components/reactflowBlocks/stockageBlocks/arrayBlock';
import ObjectBlock from 'src/@core/components/reactflowBlocks/stockageBlocks/objectBlock';
import RecurrenceBlock from 'src/@core/components/reactflowBlocks/timeBlocks/recurrenceBlock';
import DateBlock from 'src/@core/components/reactflowBlocks/timeBlocks/dateBlock';
import StringToNumberBlock from 'src/@core/components/reactflowBlocks/conversionBlock/stringToNumberBlock';
import StringBuilderBlock from 'src/@core/components/reactflowBlocks/stockageBlocks/stringBuilderBlock';
import AtBlockIndicator from 'src/@core/components/reactflowBlocksIndicator/controlBlocks/atBlockIndicator';
import NumberToBoolBlockIndicator from 'src/@core/components/reactflowBlocksIndicator/conversionsBlocks/numberToBool';
import StringToNumberBlockIndicator from 'src/@core/components/reactflowBlocksIndicator/conversionsBlocks/stringToNumber';
import NumberToStringBlockIndicator from 'src/@core/components/reactflowBlocksIndicator/conversionsBlocks/numberToString';
import StringBuilderBlockIndicator from 'src/@core/components/reactflowBlocksIndicator/stockageBlocks/stringBuilderBlock';
import ArrayBlockIndicator from 'src/@core/components/reactflowBlocksIndicator/stockageBlocks/arrayBlock';
import ObjectBlockIndicator from 'src/@core/components/reactflowBlocksIndicator/stockageBlocks/objectBlock';
import DateBlockIndicator from 'src/@core/components/reactflowBlocksIndicator/temporalBlock/dateBlock';
import RecurrenceBlockIndicator from 'src/@core/components/reactflowBlocksIndicator/temporalBlock/recurrenceBlock';

const Drawer = styled(MuiDrawer)(({ theme }) => ({
    width: 400,
    zIndex: theme.zIndex.modal,
    '& .MuiFormControlLabel-root': {
        marginRight: '0.6875rem'
    },
    '& .MuiDrawer-paper': {
        border: 0,
        width: 400,
        zIndex: theme.zIndex.modal,
        boxShadow: theme.shadows[9]
    }
}))

const CustomizerSpacing = styled('div')(({ theme }) => ({
    padding: theme.spacing(5, 6)
}))

const ReactFlowPage = ({value, onChange}) => {
    const dispatch = useDispatch();
    const reduxNodes = useSelector((state) => state.nodes.nodes);
    const reduxEdges = useSelector((state) => state.edges);
    const [test, setTest] = useState(false);

    const DefaultSmoothStepEdge = ({ id, sourceX, sourceY, targetX, targetY }) => {
        const [edgePath] = getSmoothStepPath({
          sourceX,
          sourceY,
          targetX,
          targetY,
        });
      
        return (
          <>
            <BaseEdge
              id={id}
              path={edgePath}
              style={{ strokeWidth: 3 }}
            />
          </>
        );
    };

    const edgeTypes = useMemo(() => {
        return {
          'custom-edge': DefaultSmoothStepEdge,
        };
    }, []);
    
    const nodeColor = (node) => {
        switch (node.type) {
            case 'startBlock':
            case 'endBlock':
                return '#7367F0';
            case 'ifBlock':
            case 'forBlock':
            case 'onBlock':
            case 'forEachBlock':
            case 'atBlock':
                return '#000000';
            case 'equalBlock':
            case 'notEqualBlock':
            case 'superiorBlock':
            case 'inferiorBlock':
            case 'superiorOrEqualBlock':
            case 'inferiorOrEqualBlock':
                return '#FF9F43';
            case 'numberBlock':
            case 'stringBlock':
            case 'booleanBlock':
            case 'arrayBlock':
            case 'objectBlock':
            case 'stringBuilderBlock':
                return '#E83E8C';
            case 'numberToBoolBlock':
            case 'numberToStringBlock':
                return '#00CFE8';
            case 'recurrenceBlock':
            case 'dateBlock':
                return '#EA5455';
            default:
                return '#ff0072';
        }
    }

    const JSONToReactFlow = (json) => {
        const reactFlowNodes = json.nodes.map((jsonNode) => ({
          id: jsonNode.id,
          type: jsonNode.type,
          position: jsonNode.position,
          data: jsonNode.data,
        }));
      
        const reactFlowEdges = json.edges.map((jsonEdge) => ({
          id: jsonEdge.id,
          source: jsonEdge.source,
          target: jsonEdge.target,
        }));
      
        return {
          nodes: reactFlowNodes,
          edges: reactFlowEdges,
        };
      };

    const reactFlowToJSON = (nodes, edges) => {
        const jsonNodes = nodes.map((node) => ({
          id: node.id,
          type: node.type,
          position: node.position,
          data: node.data,
        }));
      
        const jsonEdges = edges.map((edge) => ({ // je peux récup direct edges reducer
          id: edge.id,
          source: edge.source,
          target: edge.target,
        }));
      
        return {
          nodes: jsonNodes,
          edges: jsonEdges,
        };
    };
    const initialEdges = [];

    const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const [isCreateMenuOpen, setIsCreateMenuOpen] = useState(false);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const checkType = (verif, sourceNode, targetNode) => { // Conversion with type value checker
        const connectedNodeType = sourceNode && sourceNode.data.typeOutput ? sourceNode.data.typeOutput : sourceNode ? sourceNode.data.type : '';

        if (connectedNodeType && targetNode.data.type) {
            if (connectedNodeType !== targetNode.data.type)
                return 1;
        }
        return verif;
    };

    const checkAlreadyConnected = (verif, sourceNode, targetNode, connection) => {
        const connectedNodes = getConnectedNodes(targetNode, reduxNodes, reduxEdges);
        return verif;
    };
    
    const checkAtType = (sourceNode, targetNode) => {
        const connectedNodes = getConnectedNodes(targetNode.id, reduxNodes, reduxEdges);
        if (connectedNodes.length === 1) {
            if (sourceNode.data.type === 'str' || sourceNode.data.type === 'number')
                return false;
        } else {
            if (sourceNode.data.type === 'object' || sourceNode.data.type === 'array')
                return false;
        }
        return true;
    };

    const isValidConnection = (connection) => {
        let verif = 0;
        const sourceNode = reduxNodes.find((node) => node.id === connection.source);
        const targetNode = reduxNodes.find((node) => node.id === connection.target);
        
        if (sourceNode && targetNode) { // rules
            if (targetNode.type === 'atBlock' && checkAtType(sourceNode, targetNode)) {
                verif = 1;
            }
            verif = checkType(verif, sourceNode, targetNode);
            // verif = checkAlreadyConnected(verif, sourceNode, targetNode, connection);
        }
        if (verif === 0)
            return true;
        return false;
    };

    const onConnect = useCallback((params) => {
        let verif = 0;

        const updatedNodes = reduxNodes.map((node) => {
            if (node.id === params.target) {
                const connectedNode = reduxNodes.find((n) => n.id === (node.id === params.source ? params.target : params.source));
                const connectedNodeType = connectedNode && connectedNode.data.typeOutput ? connectedNode.data.typeOutput : connectedNode ? connectedNode.data.type : '';
    
                if (node.type == 'atBlock') {
                    return {
                        ...node,
                        data: {
                            ...node.data,
                            type: connectedNodeType === 'object' ? 'str' : connectedNodeType === 'array' ? 'number' : connectedNodeType === 'str' ? 'str' : connectedNodeType === 'number' ? 'number' : ''
                        },
                    };
                }
                if (isComparaisonNode(node.type)) {
                    if (node.data.type === '' || node.data.type === connectedNodeType) {
                        return {
                            ...node,
                            data: {
                                ...node.data,
                                type: connectedNodeType
                            },
                        };
                    }
                }
            }
            return node;
        });
    
        if (verif === 0) {
            setEdges((els) =>
                addEdge(
                    {
                        ...params,
                        type: 'smoothstep',
                        style: { strokeWidth: 3 },
                    },
                    els
                )
            );
            const edgeId = `${params.sourceHandle}#${params.targetHandle}`;
            dispatch(addReduxEdge({
                id: edgeId,
                source: params.source,
                target: params.target,
            }));
            dispatch(setReduxNodes(updatedNodes));
        }
    }, [setEdges, reduxNodes, dispatch]);

  useEffect(() => {
    const reactFlowData = JSONToReactFlow(value);

    if (JSON.stringify(reduxNodes) !== JSON.stringify(reactFlowData.nodes)) {
      dispatch(setReduxNodes(reactFlowData.nodes));
    }
    setTest(true);
  }, []);

  useEffect(() => {
    const reactFlowData = JSONToReactFlow(value);

    if (test && reduxNodes) {
        const edgesWithType = reactFlowData.edges.map((edge) => ({
          ...edge,
          type: 'custom-edge',
        }));
      
        dispatch(setReduxEdges(edgesWithType));
        setEdges(edgesWithType);
      }
  }, [test]);
    
    const nodeTypes = useMemo(() => ({
        startBlock: StartBlock,
        endBlock: EndBlock,
        ifBlock: IfBlock,
        forBlock: ForBlock,
        onBlock: OnBlock,
        forEachBlock: ForEachBlock,
        atBlock: AtBlock,
        equalBlock: EqualBlock,
        notEqualBlock: NotEqualBlock,
        superiorBlock: SuperiorBlock,
        inferiorBlock: InferiorBlock,
        inferiorOrEqualBlock: InferiorOrEqualBlock,
        superiorOrEqualBlock: SuperiorOrEqualBlock,
        numberBlock: NumberBlock,
        booleanBlock: BooleanBlock,
        stringBlock: StringBlock,
        arrayBlock: ArrayBlock,
        objectBlock: ObjectBlock,
        numberToBoolBlock: NumberToBoolBlock,
        numberToStringBlock: NumberToStringBlock,
        stringToNumberBlock: StringToNumberBlock,
        recurrenceBlock: RecurrenceBlock,
        dateBlock: DateBlock,
        stringBuilderBlock: StringBuilderBlock,
    }), []);

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
      }, []);

    const onDragStart = (event, nodeType, nodeData) => {
        setIsCreateMenuOpen(false);
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.setData('application/reactflow-data', JSON.stringify(nodeData));
        event.dataTransfer.effectAllowed = 'move';
    };

    const onDrop = (event) => {
        event.preventDefault();
    
        const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
        const type = event.dataTransfer.getData('application/reactflow');
        const data = JSON.parse(event.dataTransfer.getData('application/reactflow-data'));

        const newNode = {
            id: getId(reduxNodes),
            type,
            position: reactFlowInstance.project({
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top,
            }),
            data: {
                ...data,
                label: getId(reduxNodes),
            },
        };
    
        dispatch(setReduxNodes([...reduxNodes, newNode]));

        if (onChange) {
            onChange([...reduxNodes, newNode]);
        }
    };

    const handleCloseMenu = () => {
        setIsCreateMenuOpen(false);
    }

    const handleOpenMenu = () => {
        setIsCreateMenuOpen(true);
    };

    const handleSave = () => {
        const json = reactFlowToJSON(reduxNodes, reduxEdges);
        const jsonString = JSON.stringify(json, null, 2);
        
        const blob = new Blob([jsonString], { type: 'application/json' });
    
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'output.json';

        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);
    };

    const getId = (reduxNodes) => `${reduxNodes.length + 1}`;

    const onEdgeClick = (event, edge, edges, setEdges) => {
        if (event.detail === 3) {
            const updatedEdges = edges.filter((e) => e.id !== edge.id);
            setEdges(updatedEdges);
    
            const targetNode = reduxNodes.find((node) => node.id === edge.target);

            if (targetNode && isComparaisonNode(targetNode.type)) {
                const connectedEdges = edges.filter(
                    (e) => e.source === edge.source || e.target === edge.target
                );
                console.log(connectedEdges);
                if (connectedEdges.length === 1) {
                const updatedNodes = reduxNodes.map((node) => {
                    if (node.id === targetNode.id) {
                    return {
                        ...node,
                        data: {
                        ...node.data,
                        type: '',
                        },
                    };
                    }
                    return node;
                });
                dispatch(setReduxNodes(updatedNodes));
                }
            }
        
            dispatch(removeReduxEdge(edge.id));
          };
    };

    const onNodeClick = (event, node, nodes) => {
        if (event.detail === 3) {
            const updatedNodes = nodes.filter((n) => n.id !== node.id);
            dispatch(setReduxNodes(updatedNodes));
        }
    };

    const onNodeDragStop = (event, draggedNode) => {
        const { id, position } = draggedNode;
        const newPosition = { x: position.x, y: position.y };
      
        const updatedNodes = [...reduxNodes];
        const nodeIndex = updatedNodes.findIndex((node) => node.id === id);
      
        if (nodeIndex !== -1) {
          updatedNodes[nodeIndex] = {
            ...updatedNodes[nodeIndex],
            position: newPosition,
          };
          dispatch(setReduxNodes(updatedNodes));
        } else {
          console.error(`Node with ID ${id} not found in the nodes array.`);
        }
      };

    return (
        <Grid container spacing={2}>
            <PageHeader
                title={
                    <Grid container spacing={2} justifyContent="space-between">
                    <Grid item>
                        <Typography variant='h4' sx={{ mb: 6 }}>
                            ReactFlow
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button
                        variant='contained'
                        color='primary'
                        startIcon={<Icon icon='tabler:save' fontSize={20} />}
                        onClick={handleSave}
                        sx={{ mr: 2 }}
                        >
                        Enregister
                        </Button>
                        <Button
                        variant='contained'
                        color='primary'
                        startIcon={<Icon icon='tabler:plus' fontSize={20} />}
                        onClick={handleOpenMenu}>
                            Add Block
                        </Button>
                    </Grid>
                    </Grid>
                }
            />
            <Grid item style={{ width: '100%', height: '68vh' }}>
                <ReactFlowProvider>
                    <ReactFlow
                        ref={reactFlowWrapper}
                        nodes={reduxNodes}
                        edges={edges}
                        defaultNodes={reduxNodes}
                        defaultEdges={edges}
                        onEdgesChange={onEdgesChange}
                        nodeTypes={nodeTypes}
                        edgeTypes={edgeTypes}
                        onConnect={onConnect}
                        isValidConnection={isValidConnection}
                        onInit={setReactFlowInstance}
                        onDrop={onDrop}
                        onDragOver={onDragOver}
                        onEdgeClick={(event, edge) => onEdgeClick(event, edge, edges, setEdges)}
                        onNodeClick={(event, node) => onNodeClick(event, node, reduxNodes)}
                        onNodeDragStop={onNodeDragStop}
                        fitView
                    >
                        <Background
                            id="1"
                            gap={10}
                            color="#f1f1f1"
                            variant={BackgroundVariant.Lines}
                        />
                        <Background
                            id="2"
                            gap={100}
                            color="#ccc"
                            variant={BackgroundVariant.Lines}
                        />
                        <Controls />
                        <MiniMap
                            nodeColor={nodeColor}
                            nodeStrokeColor={() => {
                                return "#000000";
                            }}
                            nodeBorderRadius={15}
                            style={{
                                border: "1px solid black"
                            }}
                            maskColor="rgb(0,0,0, 0.1)"
                        />
                        <Controls />
                    </ReactFlow>
                </ReactFlowProvider>
            </Grid>
            <Drawer open={isCreateMenuOpen} hideBackdrop anchor='right' variant='persistent'>
                <Box
                className='customizer-header'
                sx={{
                    position: 'relative',
                    p: theme => theme.spacing(3.5, 5),
                    borderBottom: theme => `1px solid ${theme.palette.divider}`
                }}
                >
                <Typography variant='h4' sx={{ fontWeight: 600 }}>
                    Toolbox
                </Typography>
                <IconButton
                    onClick={handleCloseMenu}
                    sx={{
                    right: 20,
                    top: '50%',
                    position: 'absolute',
                    color: 'text.secondary',
                    transform: 'translateY(-50%)'
                    }}
                >
                    <Icon icon='tabler:x' fontSize={20} />
                </IconButton>
                </Box>
                <PerfectScrollbar options={{ wheelPropagation: false }}>

                <CustomizerSpacing className='customizer-body'>
                    <Typography
                        component='p'
                        variant='caption'
                        sx={{ mb: 5, color: 'text.disabled', textTransform: 'uppercase' }}
                        >
                        Marking blocks
                    </Typography>
                    <Box sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
                        <div onDragStart={(event) => onDragStart(event, 'startBlock', {})} draggable="true">
                            <StartBlockIndicator/>
                        </div>
                    </Box>
                    <Box sx={{ mb: -5, display: 'flex', alignItems: 'center' }}>
                        <div onDragStart={(event) => onDragStart(event, 'endBlock', {})} draggable="true">
                            <EndBlockIndicator/>
                        </div>
                    </Box>
                </CustomizerSpacing>

                <CustomizerSpacing className='customizer-body'>
                    <Typography
                        component='p'
                        variant='caption'
                        sx={{ mb: 5, color: 'text.disabled', textTransform: 'uppercase' }}
                        >
                        Control blocks
                    </Typography>
                        
                    <Box sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
                        <div onDragStart={(event) => onDragStart(event, 'ifBlock', {type: 'bool'})} draggable="true">
                            <IfBlockIndicator/>
                        </div>
                    </Box>
                    <Box sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
                        <div onDragStart={(event) => onDragStart(event, 'forBlock', {type: 'bool'})} draggable="true">
                            <ForBlockIndicator/>
                        </div>
                    </Box>
                    <Box sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
                        <div onDragStart={(event) => onDragStart(event, 'forEachBlock', {type: 'array'})} draggable="true">
                            <ForEachBlockIndicator/>
                        </div>
                    </Box>
                    <Box sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
                        <div onDragStart={(event) => onDragStart(event, 'onBlock', {type: 'recurrence-date'})} draggable="true">
                            <OnBlockIndicator/>
                        </div>
                    </Box>
                    <Box sx={{ mb: -5, display: 'flex', alignItems: 'center' }}>
                        <div onDragStart={(event) => onDragStart(event, 'atBlock', {type: ''})} draggable="true">
                            <AtBlockIndicator/>
                        </div>
                    </Box>
                </CustomizerSpacing>

                <CustomizerSpacing className='customizer-body'>
                    <Typography
                        component='p'
                        variant='caption'
                        sx={{ mb: 5, color: 'text.disabled', textTransform: 'uppercase' }}
                        >
                        Stockage blocks
                    </Typography>
                    <Box sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
                        <div onDragStart={(event) => onDragStart(event, 'booleanBlock', {value: false, type: 'bool'})} draggable="true">
                            <BooleanBlockIndicator/>
                        </div>
                    </Box>
                    <Box sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
                        <div onDragStart={(event) => onDragStart(event, 'numberBlock', {value: 0, type: 'number'})} draggable="true">
                            <NumberBlockIndicator/>
                        </div>
                    </Box>
                    <Box sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
                        <div onDragStart={(event) => onDragStart(event, 'stringBlock', {value: '', type: 'str'})} draggable="true">
                            <StringBlockIndicator/>
                        </div>
                    </Box>
                    <Box sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
                        <div onDragStart={(event) => onDragStart(event, 'objectBlock', {value: '', type: 'object'})} draggable="true">
                            <ObjectBlockIndicator/>
                        </div>
                    </Box>
                    <Box sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
                        <div onDragStart={(event) => onDragStart(event, 'arrayBlock', {value: '', type: 'array'})} draggable="true">
                            <ArrayBlockIndicator/>
                        </div>
                    </Box>
                    <Box sx={{ mb: -5, display: 'flex', alignItems: 'center' }}>
                        <div onDragStart={(event) => onDragStart(event, 'stringBuilderBlock', {type: 'str', typeOutput: 'str', value: ''})} draggable="true">
                            <StringBuilderBlockIndicator/>
                        </div>
                    </Box>
                </CustomizerSpacing>

                <CustomizerSpacing className='customizer-body'>
                    <Typography
                        component='p'
                        variant='caption'
                        sx={{ mb: 5, color: 'text.disabled', textTransform: 'uppercase' }}
                        >
                        Conversion blocks
                        </Typography>
                    <Box sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
                        <div onDragStart={(event) => onDragStart(event, 'numberToBoolBlock', {type: 'number', typeOutput: 'bool', value: false})} draggable="true">
                            <NumberToBoolBlockIndicator/>
                        </div>
                    </Box>
                    <Box sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
                        <div onDragStart={(event) => onDragStart(event, 'numberToStringBlock', {type: 'number', typeOutput: 'str', value: ''})} draggable="true">
                            <NumberToStringBlockIndicator/>
                        </div>
                    </Box>
                    <Box sx={{ mb: -5, display: 'flex', alignItems: 'center' }}>
                        <div onDragStart={(event) => onDragStart(event, 'stringToNumberBlock', {type: 'str', typeOutput: 'number', value: ''})} draggable="true">
                            <StringToNumberBlockIndicator/>
                        </div>
                    </Box>
                </CustomizerSpacing>

                <CustomizerSpacing className='customizer-body'>
                    <Typography
                        component='p'
                        variant='caption'
                        sx={{ mb: 5, color: 'text.disabled', textTransform: 'uppercase' }}
                        >
                        Comparaison blocks
                    </Typography>
                    <Box sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
                        <div onDragStart={(event) => onDragStart(event, 'equalBlock', {type: '', typeOutput: 'bool', value: 'false'})} draggable="true">
                            <EqualBlockIndicator/>
                        </div>
                    </Box>
                    <Box sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
                        <div onDragStart={(event) => onDragStart(event, 'notEqualBlock', {type: '', typeOutput: 'bool', value: 'false'})} draggable="true">
                            <NotEqualBlockIndicator/>
                        </div>
                    </Box>
                    <Box sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
                        <div onDragStart={(event) => onDragStart(event, 'superiorBlock', {type: '', typeOutput: 'bool', value: 'false'})} draggable="true">
                            <SuperiorBlockIndicator/>
                        </div>
                    </Box>
                    <Box sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
                        <div onDragStart={(event) => onDragStart(event, 'superiorOrEqualBlock', {type: '', typeOutput: 'bool', value: 'false'})} draggable="true">
                            <SuperiorOrEqualBlockIndicator/>
                        </div>
                    </Box>
                    <Box sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
                        <div onDragStart={(event) => onDragStart(event, 'inferiorBlock', {type: '', typeOutput: 'bool', value: 'false'})} draggable="true">
                            <InferiorBlockIndicator/>
                        </div>
                    </Box>
                    <Box sx={{ mb: -5, display: 'flex', alignItems: 'center' }}>
                        <div onDragStart={(event) => onDragStart(event, 'inferiorOrEqualBlock', {type: '', typeOutput: 'bool', value: 'false'})} draggable="true">
                            <InferiorOrEqualBlockIndicator/>
                        </div>
                    </Box>

                </CustomizerSpacing>

                <CustomizerSpacing className='customizer-body'>
                    <Typography
                        component='p'
                        variant='caption'
                        sx={{ mb: 5, color: 'text.disabled', textTransform: 'uppercase' }}
                        >
                        Temporal blocks
                    </Typography>
                    <Box sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
                        <div onDragStart={(event) => onDragStart(event, 'recurrenceBlock', {type: 'recurrence-date', value: {}})} draggable="true">
                            <RecurrenceBlockIndicator/>
                        </div>
                    </Box>
                    <Box sx={{ mb: -5, display: 'flex', alignItems: 'center' }}>
                        <div onDragStart={(event) => onDragStart(event, 'dateBlock', {type: 'recurrence-date', value: {}})} draggable="true">
                            <DateBlockIndicator/>
                        </div>
                    </Box>
                </CustomizerSpacing>

                <CustomizerSpacing className='customizer-body'>
                    <Typography
                        component='p'
                        variant='caption'
                        sx={{ mb: 5, color: 'text.disabled', textTransform: 'uppercase' }}
                        >
                        Evenement blocks
                    </Typography>
                    
                </CustomizerSpacing>

                </PerfectScrollbar>
            </Drawer>
        </Grid>
    )
  }
  
  export default ReactFlowPage
  