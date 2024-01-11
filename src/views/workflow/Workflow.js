import React, {useCallback, useEffect, useRef, useState} from 'react';
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge, ConnectionLineType,
} from 'reactflow';
import BaseNode from "./Nodes/BaseNode";
import toast from "react-hot-toast";
import Grid from "@mui/material/Grid";
import {Button, DialogTitle} from "@mui/material";
import Icon from "../../@core/components/icon";
import {ToolBoxDrawer} from "./ToolBoxDrawer";
import {HandleTypes, nodeGlobalStyles} from "./Nodes/nodes";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CustomTextField from "../../@core/components/mui/text-field";
import DialogActions from "@mui/material/DialogActions";

const types = {
  baseNode: BaseNode
}

let id = 0;
export const getId = () => `LinkEaseNode_${id++}`;

export default function WorkflowComponent({value, onChange, events}) {
  const [nodes, setNodes, onNodesChange] = useNodesState(value.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(value.edges);
  const [nodeStyles, setNodeStyles] = useState(nodeGlobalStyles)
  const [isOpen, setOpen] = useState(false)
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [menu, setMenu] = useState(null);
  const ref = useRef(null);
  const [countPin, setCountPin] = useState(0);

  useEffect(() => {
    setNodeStyles({
      ...nodeGlobalStyles,
      ...events
    })
  }, [events])

  const onConnect = useCallback(
    (params) => {
      const { sourceHandle, targetHandle } = params;
      const [idSource, typeSource] = sourceHandle.split("#");
      const [idTarget, typeTarget] = targetHandle.split("#");

      if (typeSource !== HandleTypes.ANY && typeTarget !== HandleTypes.ANY && typeSource !== typeTarget) {
        toast.error("You cannot connect these handles")
        return;
      }
      setEdges((eds) => addEdge({...params, type: ConnectionLineType.SmoothStep, link: idSource + "#" + idTarget}, eds))
    },
    [setEdges],
  );

  const onSave = useCallback(() => {
    if (reactFlowInstance) {
      const flow = reactFlowInstance.toObject();
      console.log(flow)
      onChange(flow);
    }
  }, [reactFlowInstance]);

  const handleDrawer = () => setOpen(!isOpen)

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');

      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        "type": "baseNode",
        position,
        data: {
          label: type,
          ...nodeStyles[type]
        },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance],
  );

  const onNodeContextMenu = useCallback((event, node) => {
      event.preventDefault();
      setCountPin(node.data.inputs.length);
      setMenu(node);
    },
    [setMenu],
  );

  const onPaneClick = useCallback(() => setMenu(null), [setMenu]);

  return (
    <>
      <Grid container spacing={2} justifyContent="flex-end" sx={{mb: 3}}>
        <Grid item>
          <Button
            variant='contained'
            color='primary'
            startIcon={<Icon icon='tabler:save' fontSize={20} />}
            sx={{ mr: 2 }}
            onClick={onSave}
          >
            Register
          </Button>
          <Button
            variant='contained'
            color='primary'
            onClick={handleDrawer}
            startIcon={<Icon icon='tabler:plus' fontSize={20} />}
          >
            Add Block
          </Button>
        </Grid>
      </Grid>
      <ReactFlow
        ref={ref}
        nodes={nodes}
        edges={edges}
        nodeTypes={types}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onInit={setReactFlowInstance}
        onPaneClick={onPaneClick}
        onNodeContextMenu={onNodeContextMenu}
      >
        <Controls />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
      <ToolBoxDrawer isOpen={isOpen} handleDrawer={handleDrawer} nodeStyles={nodeStyles} setNodes={setNodes} />
      <Dialog open={Boolean(menu)} onClose={onPaneClick} aria-labelledby='form-dialog-title' maxWidth="sm">
        <DialogTitle id='form-dialog-title'>Node</DialogTitle>
        <DialogContent>
          <CustomTextField id='name' autoFocus fullWidth type="number" label='Number of entry point' value={countPin}
                           onChange={(e) => setCountPin((e.target.value !== "") ? parseInt(e.target.value) : 0)} />
        </DialogContent>
        <DialogActions className='dialog-actions-dense'>
          <Button
            variant='contained'
            color='error'
            startIcon={<Icon icon='tabler:trash' fontSize={20} />}
            sx={{ mr: 2 }}
            onClick={() => {
              setNodes((nodes) => nodes.filter((node) => node.id !== menu.id));
              setEdges((edges) => edges.filter((edge) => edge.source !== menu.id));
              onPaneClick()
            }}
          >
            Delete
          </Button>
          <Button
            variant='contained'
            color='primary'
            startIcon={<Icon icon='tabler:check' fontSize={20} />}
            sx={{ mr: 2 }}
            onClick={() => {
              let inputs = [];

              for (let i = 0; i < countPin; i++)
                inputs.push({
                  "id": "argument_" + i,
                  "type": HandleTypes.ANY
                })
              setNodes(nodes.map((nde) => {
                if (nde.id === menu.id) {
                  nde.data = {
                    ...nde.data,
                    inputs
                  };
                }
                return nde;
              }));
              onPaneClick()
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
